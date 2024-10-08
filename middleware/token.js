// middleware/auth.js
import { useMyStore } from "~/stores/index";
const store = useMyStore();

export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token').value;
    // localStorage.getItem('token');

    if (token) {
        // ตรวจสอบว่าโทเคนหมดอายุหรือไม่
        const decodedToken = await store.fetchUserProfile()
        if (decodedToken && decodedToken.status === 401) { // 401 Unauthorized

            // ถ้าโทเคนหมดอายุ สามารถดำเนินการเพิ่มเติมได้ เช่น ลบ token และ redirect ไปหน้า login
            // localStorage.removeItem('token'); // ลบ token จาก localStorage
            useCookie('token').value = null;
            return navigateTo('/'); // เปลี่ยน URL ไปยังหน้าล็อกอิน
        }

    } else {
        // ถ้าไม่มีโทเคน ให้ redirect ไปหน้า login
        return navigateTo('/');
    }
});
