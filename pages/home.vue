<template>
  <div class="flex flex-col items-center">
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
import { useMyStore } from "~/stores/index";
import axios from "axios";

const store = useMyStore();
const router = useRouter();
const rewards = ref([]);
const currentPage = ref(1);
const itemsPerPage = 3; // จำนวนรายการต่อหน้า

definePageMeta({
  middleware: "token",
});

const { data, pending, error, execute } = useFetch(
  "http://localhost:5000/rewards",
  {
    method: "GET",
    // lazy: true, // กำหนดให้โหลดข้อมูลเฉพาะเมื่อเรียกใช้งาน
  }
);

// ฟังก์ชันที่จะทำให้ data เริ่มโหลด
const fetchRewards = async () => {
  await execute(); // เรียกใช้งาน execute เพื่อโหลดข้อมูล
  // ตรวจสอบสถานะการโหลดข้อมูล
  if (data.value) {
    rewards.value = data.value; // นำข้อมูลที่ได้จาก data ไปเก็บใน rewards
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
</script>

<style scoped>
</style>
