<template>
  <div
    class="flex flex-col w-25 h-full bg-gray-800 text-white fixed left-0 top-0"
  >
    <div class="p-4 text-lg font-bold">My App</div>
    <nav class="flex flex-col space-y-2 mt-4">
      <NuxtLink
        to="/home"
        class="flex items-center p-2 hover:bg-gray-700 rounded"
      >
        <span class="ml-2">Home</span>
      </NuxtLink>
      <NuxtLink
        to="/reward"
        class="flex items-center p-2 hover:bg-gray-700 rounded"
      >
        <span class="ml-2">Rewards</span>
      </NuxtLink>
      <NuxtLink
        to="/profile"
        class="flex items-center p-2 hover:bg-gray-700 rounded"
      >
        <span class="ml-2">Profile</span>
      </NuxtLink>
      <div
        @click="logout"
        class="flex items-center p-2 hover:bg-gray-700 rounded"
      >
        <span class="ml-2">Logout</span>
      </div>
    </nav>
  </div>
</template>
  
  <script setup>
  import Swal from 'sweetalert2'
import { useMyStore } from "~/stores/index";

const store = useMyStore();
const router = useRouter();
// ฟังก์ชัน Logout
const logout = () => {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    text: "ออกจากบบ",
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
      // ลบ token จาก localStorage
      localStorage.removeItem("token");

      // อัปเดตสถานะใน store
      store.$reset();

      // เปลี่ยนเส้นทางกลับไปยังหน้าล็อกอิน
      router.push("/");
    }
  });
};
</script>
  
  <style scoped>
.material-icons {
  font-size: 24px;
}
</style>
  