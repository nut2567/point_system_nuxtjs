// middleware/auth.js
import { useMyStore } from "~/stores/index";
const store = useMyStore();

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = localStorage.getItem('token');

  if (token) {
    // ตรวจสอบว่าโทเคนหมดอายุหรือไม่
    const decodedToken = await store.fetchUserProfile()

    console.log("decodedToken", decodedToken);
    if (decodedToken && decodedToken.status === 200) { // Redirect ไปหน้า home ถ้าโทเคนยังไม่หมดอายุ
    }
    return navigateTo('/home');
  }
});
