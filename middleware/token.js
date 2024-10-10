// middleware/token.js
import { useMyStore } from "~/stores/index";
const store = useMyStore();

export default defineNuxtRouteMiddleware(async (to, from) => {
    const tokenCookie = useCookie('token'); // ประกาศ tokenCookie
    const token = tokenCookie.value;

    if (token) {
        // ตรวจสอบว่าโทเคนหมดอายุหรือไม่
        const {data:decodedToken} = await store.fetchUserProfile()
        console.log("Login decodedToken:", decodedToken.statusCode);
        if (decodedToken && decodedToken.statusCode == 403) { 

            // ถ้าโทเคนหมดอายุ redirect ไปหน้า login
            // ตั้งค่า cookie ให้หมดอายุเพื่อลบ
            tokenCookie.value = '';  // ตั้งค่าเป็นค่าว่าง
            tokenCookie.expire = new Date(0);  // กำหนดให้หมดอายุไปแล้ว;
            return navigateTo('/'); // เปลี่ยน URL ไปยังหน้าล็อกอิน
        }

    } else {
        // ถ้าไม่มีโทเคน ให้ redirect ไปหน้า login
        return navigateTo('/');
    }
});
