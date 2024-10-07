<template>
  <div class="reward-card" >
    <img :src="reward.image" alt="Reward Image" class="reward-image" />
    <div class="reward-content">
      <h2 class="reward-title">{{ reward.title }}</h2>
      <p class="reward-description">{{ reward.description }}</p>
      <p class="reward-points">Points Required: <strong>{{ reward.points }}</strong></p>
      <p class="reward-expiry">Expiry Date: {{ reward.expiryDate }}</p>
    </div>
    <button class="redeem-btn" @click.stop="goToRewardDetail">Redeem</button>
  </div>
</template>

<script setup>
import { useMyStore } from "~/stores/index";

const store = useMyStore();

const props = defineProps({
  reward: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

// ฟังก์ชันสำหรับการแลกรับรางวัล
const redeemReward = () => {
  alert(`Redeemed ${props.reward.title}`);
};

// ฟังก์ชันเพื่อไปยังหน้า RewardDetail
const goToRewardDetail = () => {
  router.push(`/rewardDetail?id=${props.reward.id}`);
};
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

.icon-star, .icon-heart {
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffcc00; 
  transition: transform 0.2s ease;
}

.icon-heart {
  color: #ff6666;
}

.icon-star:hover, .icon-heart:hover {
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