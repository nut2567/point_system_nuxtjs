<template>
  <div>
    <div
      class="fixed inset-0 w-64 bg-slate-800 text-white flex flex-col transform transition-transform 
      duration-300 ease-in-out z-50"
      :class="{
        '-translate-x-full': !isSidebarOpen && isMobile,
        'translate-x-0': isSidebarOpen || !isMobile,
      }"
    >
      <div class="p-4 text-lg font-bold text-center">My App</div>
      <nav class="flex flex-col space-y-2 mt-4">
        <NuxtLink
          to="/home"
          class="flex items-center p-2 hover:bg-gray-700 rounded"
        >
          <div class="flex">
            <i class="material-icons items-center flex mr-2">home</i>
            <span class="ml-2">Home</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/reward"
          class="flex items-center p-2 hover:bg-gray-700 rounded"
          ><div class="flex">
            <i class="material-icons items-center flex mr-2">stars</i>
            <span class="ml-2">Rewards</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/profile"
          class="flex items-center p-2 hover:bg-gray-700 rounded"
          ><div class="flex">
            <i class="material-icons items-center flex mr-2">person</i>
            <span class="ml-2">Profile</span>
          </div>
        </NuxtLink>
        <div
          @click="logout"
          class="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <div class="flex">
            <i class="material-icons items-center flex mr-2">logout</i>
            <span class="ml-2">Logout</span>
          </div>
        </div>
      </nav>
    </div>
    <!-- Hamburger Icon for Mobile -->
    <button
      class="fixed top-4 left-4 z-50 text-white p-2 rounded-md focus:outline-none sm:hidden"
      :class="{
        'bg-gray-800': !isSidebarOpen,
        'bg-gray-200': isSidebarOpen,
      }"
      @click="toggleSidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>
</template>
  
  <script setup>
import Swal from "sweetalert2";
import { useMyStore } from "~/stores/index";

const store = useMyStore();
const router = useRouter();
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
  