<template>
  <div class="flex flex-col items-center w-full">
    <header
      class="header w-full bg-blue-600 text-white p-4 text-center text-2xl"
    >
      Welcome to the Points System
    </header>

    <div class="flex flex-col items-center w-full mt-4">
      <div class="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl">
        <h2 class="text-xl font-bold mb-2">Hello, {{ firstname }}!</h2>
        <p class="text-gray-600">
          Your points: <span class="font-semibold">{{ user_points }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useMyStore } from "~/stores/index";

const store = useMyStore();

const firstname = ref('');
const user_points = ref(0);

onMounted(() => {  
  store.fetchUserProfile();
});
// Watch เพื่ออัปเดตค่าเมื่อ userinfo ใน store เปลี่ยน
watchEffect(() => {
  if (store.userinfo) {
    firstname.value = store.userinfo.name; // อัปเดตชื่อ
    user_points.value = store.userinfo.points; // อัปเดตแต้ม
  }
});
</script>
  
  <style scoped>
.header {
  background-color: #d40707;
  color: #fff;
  width: 100%; /* ยาวเต็มหน้าจอ */
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
  