<template>
  <div class="flex flex-col items-center ">
    <div class="flex flex-col items-center w-full max-w-4xl mt-4">

      <ProductCarousel />

      <div class="mt-4 w-full">
        <h3 class="text-lg font-semibold mb-2">Available Rewards</h3>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          <RewardCard
            v-for="reward in paginatedRewards"
            :key="reward.id"
            :reward="reward"
            @redeem="goToRewardDetail(reward.id)"
          />
        </div>

        <div class="flex justify-between mt-4">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            Previous
          </button>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RewardCard from "@/components/RewardCard.vue";
import RewardsCarousel from "~/components/ProductCarousel.vue";
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useMyStore } from "~/stores/index";

const store = useMyStore();
const router = useRouter();
const rewards = ref([]);
const currentPage = ref(1);
const itemsPerPage = 3; // จำนวนรายการต่อหน้า

definePageMeta({
  middleware: "token",
});

const totalPages = computed(() => {
  return Math.ceil(rewards.value.length / itemsPerPage);
});

// คำนวณ rewards ที่จะแสดงในแต่ละหน้า
const paginatedRewards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return rewards.value.slice(start, start + itemsPerPage);
});

// ฟังก์ชันไปยังรายละเอียดรางวัล
const goToRewardDetail = (id) => {
  router.push({ path: `/reward-detail`, query: { id } });
};

onMounted(() => {

  // เรียกใช้ fetchRewards เมื่อ component ถูก mount
  fetchRewards();
});


const fetchRewards = async () => {

  try {
    const response = await axios.get("http://localhost:5000/rewards");
    rewards.value = response.data;
    console.log(response);
  } catch (error) {
    console.error("Error fetching rewards:", error);
  }
};
</script>

<style scoped>

</style>
