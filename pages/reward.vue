<template>
  <div class="flex flex-col items-center">
    <h1>Rewards</h1>
    <div class="reward-list">
      <RewardCard 
        v-for="(reward, index) in rewards" 
        :key="index" 
        :reward="reward" 
        @click="goToRewardDetail(reward)"
      />
    </div>
  </div>
</template>

<script setup>
import RewardCard from '@/components/RewardCard.vue';
import BottomNavigation from '@/components/BottomNavigation.vue';

definePageMeta({
  middleware: 'token'
});

const rewards = ref([
  {
    id: 1,
    title: 'Discount Voucher',
    image: 'https://via.placeholder.com/150',
    description: '10% off your next purchase',
    pointsRequired: 50,
    expiryDate: '2024-12-31',
  },
]);



const router = useRouter();

const goToRewardDetail = (reward) => {
  router.push({ path: '/rewardDetail', query: { id: reward.id } }); // เปลี่ยนเส้นทางไปหน้ารายละเอียด
};
</script>

<style scoped>
.reward-list {
  display: flex;
  flex-direction: column;
}
</style>
