<template>
  <div class="">
    <SideNavigation class="" />
    <div class=""
    :class="{
        'ml-64': isSidebarOpen && !isMobile,
      }">
      <Header  />
      <div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>

const isSidebarOpen = ref(false); // ตัวแปรเพื่อจัดการการเปิด/ปิดของ Sidebar
const isMobile = ref(false); // ตัวแปรเพื่อเช็คว่ากำลังอยู่ในโหมดมือถือหรือไม่

const toggleSidebar = () => {
  // ฟังก์ชันสำหรับเปิด/ปิด Sidebar
  isSidebarOpen.value = !isSidebarOpen.value;
};

const checkScreenSize = () => {
  // ฟังก์ชันเช็คขนาดหน้าจอ
  if (window.innerWidth >= 640) {
    isSidebarOpen.value = true; // ถ้าหน้าจอใหญ่กว่า 640px ให้เปิด Sidebar
    isMobile.value = false;
  } else {
    isSidebarOpen.value = false; // ถ้าหน้าจอเล็กกว่า 640px ให้ซ่อน Sidebar
    isMobile.value = true;
  }
};

onMounted(() => {
  // เมื่อ component ถูก mount ให้เช็คขนาดหน้าจอ
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize); // ตรวจสอบเมื่อหน้าจอมีการ resize
});
</script>

<style scoped>
</style>
