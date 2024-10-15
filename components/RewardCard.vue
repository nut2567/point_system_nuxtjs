<template>
  <div>
    
    <h2 class="font-semibold mb-10 mt-2 text-3xl text-center">Available Rewards</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
    >
      <div
        class="reward-card"
        v-for="reward in paginatedRewards"
        :key="reward.id"
        :reward="reward"
      >
        <img :src="reward.image" alt="Reward Image" class="reward-image" />
        <div class="reward-content">
          <h2 class="reward-title">{{ reward.title }}</h2>
          <p class="reward-description">{{ reward.description }}</p>
          <p class="reward-points">
            Points Required: <strong>{{ reward.points }}</strong>
          </p>
          <p class="reward-expiry">Expiry Date: {{ reward.expiryDate }}</p>
        </div>
        <button class="redeem-btn" @click.stop="goToRewardDetail(reward)">
          Redeem
        </button>
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <button
        class="px-4 py-2 bg-blue-500 text-white w-40 rounded"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        Previous
      </button>
      <button
        class="px-4 py-2 bg-blue-500 text-white w-40 rounded"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMyStore } from "~/stores/index";

const store = useMyStore();
const rewards = ref([]);
const currentPage = ref(1);
const router = useRouter();

const props = defineProps({
  itemsPerPage: {
    type: Number,
    required: false,
  },
});

const itemsPerPage = props.itemsPerPage||3; // จำนวนรายการต่อหน้า

const totalPages = computed(() => {
  return Math.ceil(rewards.value.length / itemsPerPage);
});

// คำนวณ rewards ที่จะแสดงในแต่ละหน้า
const paginatedRewards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return rewards.value.slice(start, start + itemsPerPage);
});

// ฟังก์ชันเพื่อไปยังหน้า RewardDetail
const goToRewardDetail = (reward) => {
  router.push(`/rewardDetail?id=${reward.id}`);
};

const { data, pending, error, execute } = useFetch(
  "/api/rewards",
  {
    method: "GET",
    // lazy: true, // กำหนดให้โหลดข้อมูลเฉพาะเมื่อเรียกใช้งาน
  }
);

// ฟังก์ชันที่จะทำให้ data เริ่มโหลด
const fetchRewards = async () => {
  await execute(); // เรียกใช้งาน execute เพื่อโหลดข้อมูล
  // ตรวจสอบสถานะการโหลดข้อมูล
  console.log(data.value.rewards); //
  if (data.value.rewards) {
    rewards.value = data.value.rewards; // นำข้อมูลที่ได้จาก data ไปเก็บใน rewards
  }
  // ตรวจสอบข้อผิดพลาด
  if (error.value) {
    console.error("Error fetching rewards:", error.value); // แสดงข้อผิดพลาด
  }
};

// เรียกใช้ฟังก์ชันเมื่อ component ถูก mount
onMounted(() => {
  fetchRewards();
});

// ฟังก์ชันไปยังรายละเอียดรางวัล
// const goToRewardDetail = (id) => {
//   router.push({ path: `/reward-detail`, query: { id } });
// };
</script>

<style scoped>
.rewards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}

.reward-info {
  text-align: center;
  margin-top: 1rem;
}

.reward-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.reward-points {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.points {
  color: #ff5722;
}

.reward-expiry {
  font-size: 0.9rem;
  color: #888;
}

.reward-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
}

.redeem-button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.redeem-button:hover {
  background-color: #0056b3;
}

.icons {
  display: flex;
  gap: 0.5rem;
}

.icon-star,
.icon-heart {
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffcc00;
  transition: transform 0.2s ease;
}

.icon-heart {
  color: #ff6666;
}

.icon-star:hover,
.icon-heart:hover {
  transform: scale(1.2);
}

.redeem-btn:hover {
  background-color: #218838;
  animation: pulse 1s infinite; /* แสงวูบวาบ */
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.reward-content {
  padding: 1rem;
  display: flex;
  flex-direction: column; /* จัดเรียงให้เป็นแนวตั้ง */
  gap: 0.5rem;
  height: 100%;
}

.reward-description {
  flex-grow: 1;
}

.redeem-btn {
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.reward-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.reward-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.reward-image {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}
</style>