<template>
  <div class="rewards-carousel">
    <h2 class="carousel-title">Exclusive Product</h2>
    <div class="carousel-container">
      <div
        class="carousel-track"
        ref="track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          class="reward-card w-1/2"
          v-for="reward in Product"
          :key="reward.id"
        >
          <img :src="reward.image" alt="Reward" class="reward-image" />
          <h3 class="reward-name">{{ reward.name }}</h3>
          <p class="reward-points">{{ reward.points }} Points</p>
        </div>
      </div>
    </div>
    <button @click="scrollLeft" class="scroll-button left">←</button>
    <button @click="scrollRight" class="scroll-button right">→</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";
import { useMyStore } from "~/stores/index";

const store = useMyStore();

const Product = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/Product");
    Product.value = response.data;
    console.log(response);
  } catch (error) {
    console.error("Error fetching Product", error);
  }
};

fetchProducts();

onMounted(() => {
  intervalId.value = setInterval(scrollCarousel, 3000); // เลื่อนทุก ๆ 3 วินาที
});

const track = ref(null);
const currentIndex = ref(0);
const intervalId = ref(null);

const totalProducts = () => Product.value.length; // จำนวนผลิตภัณฑ์

const scrollAmount = 500; // ปรับจำนวนการเลื่อนให้เป็นขนาดคาร์เซิล
const scrollCarousel = () => {
  if (track.value) {
    const maxScroll = track.value.scrollWidth - track.value.clientWidth; // ตำแหน่งเลื่อนสูงสุด

    // คำนวณ currentIndex โดยเพิ่มขึ้น 1 กล่องทุกครั้ง
    currentIndex.value = (currentIndex.value + 1) % Math.ceil(totalProducts());

    // ถ้า currentIndex ถึงสุดให้กลับไปเริ่มต้นใหม่
    if (currentIndex.value === 0) {
      track.value.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      const newScrollPosition = currentIndex.value * scrollAmount; // คำนวณตำแหน่งใหม่
      track.value.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    }
  }
};

const scrollLeft = () => {
  if (track.value) {
    const currentScroll = track.value.scrollLeft;
    track.value.scrollTo({
      left: currentScroll - scrollAmount,
      behavior: "smooth",
    });
  }
};

const scrollRight = () => {
  if (track.value) {
    const currentScroll = track.value.scrollLeft;
    track.value.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: "smooth",
    });
  }
};


onBeforeUnmount(() => {
  clearInterval(intervalId.value); // เคลียร์ interval เมื่อคอมโพเนนต์ถูกทำลาย
});
</script>

<style lang="scss" scoped>
.rewards-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;

  .carousel-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .carousel-container {
    display: flex;
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease; // ใช้ transition เพื่อให้การเลื่อนนุ่มนวล
    width: 100%; // ตั้งค่าความกว้างของ track ให้เต็มพื้นที่
  }

  .reward-card {
    flex: 0 0 50%; // ตั้งค่าความกว้างของ reward card ให้เท่ากับครึ่งหนึ่งของ container
    text-align: center;
    margin: 0 10px; // เพิ่มระยะห่างระหว่างการ์ด
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // เพิ่มเงาให้ชัดเจนขึ้น
    border-radius: 10px; // เพิ่มขอบโค้งให้การ์ด

    .reward-image {
      width: 100%;
      height: auto;
      border-radius: 10px; // เพิ่มขอบโค้งให้รูปภาพ
    }

    .reward-name {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }

    .reward-points {
      color: #007aff;
      font-weight: bold;
    }
  }

  .scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;

    &.left {
      left: 10px;
    }

    &.right {
      right: 10px;
    }
  }
}
</style>
