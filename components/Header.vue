<template>
  <div class="flex flex-col items-center w-full">
    <header
      class="header w-full bg-blue-600 text-white p-4 text-center text-2xl"
    >
      Welcome to the Points System
    </header>

    <div class="flex flex-col items-center w-full mt-4">
      <div class="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl">
        <h2 class="text-xl font-bold mb-2" >Hello, {{ store.userinfo.name }}!</h2>
        <p class="text-gray-600">
          Your points: <span class="font-semibold"  >{{ store.userinfo.points }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useMyStore } from "~/stores/index";

const store = useMyStore();

store.fetchUserProfile();

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
  