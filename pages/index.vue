<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold text-center mb-6">
        Login to Your Account
      </h2>
      <form @submit.prevent="login">
        <!-- Username -->
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <div class="flex">
            <i class="material-icons items-center flex mr-2">person</i>
            <input
              v-model="username"
              type="text"
              id="username"
              class="w-full rounded-md"
              placeholder="Enter your username"
              autocomplete="current-password"
            />
          </div>
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>

          <div class="flex">
            <i class="material-icons items-center flex mr-2">lock</i>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full rounded-md focus:outline-none"
              placeholder="Enter your password"
              autocomplete="current-password"
            />
          </div>
        </div>
        <div class="field spaced mb-5">
          <div class="control">
            <label class="checkbox">
              <input
                class="mr-2"
                type="checkbox"
                value="true"
                name="remember"
                v-model="Remember"
              />
              <span class="check"></span>
              <span class="control-label">Remember</span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </div>
      </form>
      <div class="text-red-500 mt-3 flex justify-center" v-if="!StatusLogin">
        <p>username or password invalid</p>
      </div>
      <!-- Forgot Password & Signup -->
      <div class="mt-6 text-center">
        <a href="#" class="text-blue-500 hover:underline"
          >Forgot your password?</a
        >
        <p class="mt-2 text-gray-600">
          Don't have an account?
          <a href="#" class="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
// State
import { useMyStore } from "~/stores/index";
import axios from "axios";

const username = ref("");
const password = ref("");
const StatusLogin = ref(true);
const Remember = ref(false);
const store = useMyStore();
const router = useRouter();

onMounted(() => {
  if (process.client) {
    // ดึงค่าจาก localStorage ถ้ามี
    username.value = localStorage.getItem("username") || '';
    password.value = localStorage.getItem("password") || '';
    Remember.value = username.value?true:false;
  }
});
// Watcher เพื่อตรวจสอบการเปลี่ยนแปลงของ Remember
watch(Remember, (newValue) => {
console.log(Remember.value);
  if (newValue) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});

definePageMeta({
  layout: "empty",
  middleware: "auth",
});

const login = async () => {
  console.log("Username:", username.value);
  console.log("Password:", password.value);

  try {
    const response = await axios.post("/api/login", {
      username: username.value,
      password: password.value,
    });
    console.log("Logging in with:", response);
    // localStorage.setItem("token", response.token); // เก็บ token ใน local storage
    useCookie("token").value = response.data.token;

    console.log(response.data);
    if (response.data && response.data.token) {
      router.push("/home"); // เปลี่ยนเส้นทางไปยังหน้า Home
    } else {
      StatusLogin.value = false;
      console.error("Login failed:");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};
</script>