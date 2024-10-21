<template>
  <div>
    <div
      class="fixed inset-0 w-64 bg-slate-800 text-white flex flex-col transform transition-transform duration-300 z-50"
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
        <NuxtLink
          to="/dashboard"
          class="flex items-center p-2 hover:bg-gray-700 rounded"
          ><div class="flex">
            <i class="material-icons items-center flex mr-2">dashboard</i>
            <span class="ml-2">Dashboard</span>
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
        <div class="py-5"></div>
        <div class="rainbow-line w-full h-2"></div>
        <div
          @click="restart_users"
          class="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <div class="flex">
            <i class="material-icons items-center flex mr-2">restart_alt</i>
            <span class="ml-2">reset users data</span>
          </div>
        </div>
        <div class="fixed bottom-0  w-full">
          <div class="flex items-center justify-center  w-full "><p>powered by</p>
          <div class=" ml-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/221px-Nuxt_logo_%282021%29.svg.png"
              alt="Next.js logo"
              class="reward-image w-26 h-7 brightness-125  bg-slate-500 px-2"
            />
          </div></div>
          
        </div>
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
import axios from "axios";

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

const restart_users = async () => {
  const response = await axios.post("/api/user/reset",{}, {
    headers: {
      Authorization: `Bearer ${useCookie('token').value}`, // ส่ง token ถ้ามี
    },
  });
  console.log(response);
};
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
@keyframes moveRainbow {
  0% {
    background-position: 0% 0;
  }
  50% {
    background-position: 70% 0;
  }
  100% {
    background-position: 130% 0;
  }
}
.rainbow-line {
  background: linear-gradient(
    90deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-size: 400%;
  animation: moveRainbow 3s linear infinite;
}

.material-icons {
  font-size: 24px;
}
</style>
  