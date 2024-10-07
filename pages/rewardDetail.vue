<template>
  <div class="reward-detail-page">
    <button
      class="back-button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm md:text-base lg:text-lg"
      @click="goBackToHome"
    >
      &larr; Back to Home
    </button>

    <div class="reward-detail-container">
      <img :src="reward.image" alt="Reward Image" class="reward-image" />
      <div class="reward-info">
        <h1 class="reward-title">{{ reward.title }}</h1>
        <p class="reward-description">{{ reward.description }}</p>
        <div class="reward-meta">
          <p><strong>Points Required:</strong> {{ reward.points }}</p>
          <p><strong>Expiry Date:</strong> {{ reward.expiryDate }}</p>
        </div>
        <button
          v-if="reward.points < store.userinfo.points && UsedReward"
          class="redeem-button"
          @click="redeemReward"
        >
          Redeem Reward
        </button>
        <button v-else class="redeem-button-disabled" disabled>
          Redeem Reward
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMyStore } from "~/stores/index";
import axios from "axios";

import Swal from "sweetalert2";
const router = useRouter();
const store = useMyStore();
const route = useRoute();

const UsedReward = ref(true);

definePageMeta({
  middleware: "token",
});

const reward = ref({
  id: 1,
  title: "Discount Coupon",
  pointsRequired: 100,
  image: "./images/discount.jpg",
  description:
    "Save 10% on your next purchase with this exclusive discount coupon.",
  expiryDate: "2024-12-31",
});

// ตรวจสอบว่ามี id หรือไม่
const id = computed(() => {
  console.log(route.query);
  return route.query?.id || "Unknown ID";
});

onMounted(async () => {
  fetchRewardDetails(id.value);

  let coupong = await store.fetchUserProfile();
  console.log("coupong", coupong.coupong);
  let foundReward = coupong.coupong.some((item) => item.reward_id == id.value);
  if (foundReward) {
    UsedReward.value = !foundReward;
  }
});

const fetchRewardDetails = async (rewardId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/rewards/${rewardId}`
    );
    console.log("Reward details:", response.data);
    reward.value = response.data;
  } catch (error) {
    console.error("Error fetching reward details:", error);
    if (error.response && error.response.status === 404) {
      alert("Reward not found");
    } else {
      alert("An error occurred while fetching the reward details.");
    }
  }
};

const fetchredeemReward = async (rewardId) => {
  try {
    const response = await axios.put(`http://localhost:5000/users/Redeem`, {
      username: store.userinfo.username,
      Redeem_id: rewardId, // ส่ง id ของ reward ที่ผู้ใช้ต้องการ redeem
    });
    console.log("Reward details:", response.data);

    let foundReward = response.data.user.coupong.some(
      (item) => item.reward_id == id.value
    );
    if (foundReward) {
      UsedReward.value = !foundReward;
    }
    await store.fetchUserProfile();
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.error("Error fetching reward details:", error);
    if (error.response && error.response.status === 404) {
      alert("Reward not found");
    } else {
      alert("An error occurred while fetching the reward details.");
    }
  }
};

const redeemReward = () => {
  Swal.fire({
    title: "แจ้งเตือน",
    icon: "warning",
    showCancelButton: true,
    text: "ยืนยันการแลกรางวัล",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  }).then((result) => {
    if (result.isConfirmed) {
      fetchredeemReward(id.value);
    }
  });
};

// ฟังก์ชันสำหรับการกลับไปหน้า home
const goBackToHome = () => {
  router.push("/home"); // เปลี่ยนเส้นทางไปหน้า home
};
</script>

<style scoped>
.reward-detail-page {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f4f4f9;
  position: relative;
}

.back-button {
  position: absolute; /* ทำให้ตำแหน่งอยู่ที่มุมซ้าย */
  top: 2rem; /* ระยะจากด้านบน */
  left: 12rem; /* ระยะจากด้านซ้าย */
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #2980b9;
}

.reward-detail-container {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.reward-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
}

.reward-info {
  text-align: left;
}

.reward-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.reward-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.reward-meta {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.reward-detail-page {
  padding-top: 6rem;
}
</style>

<style scoped lang="scss">
.redeem-button-disabled {
  background: gray;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: not-allowed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
}
.redeem-button {
  position: relative;
  padding: 10px 20px;
  background: linear-gradient(90deg, #007aff 0%, #00ff85 100%);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0 20px rgba(0, 255, 133, 0.6), 0 0 30px rgba(0, 122, 255, 0.4);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent);
    transform: translate(-50%, -50%);
    transition: transform 0.15s ease;
    pointer-events: none;
  }
}
</style>