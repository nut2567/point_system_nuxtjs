// middleware/token.js
import { useMyStore } from "~/stores/index";
import Swal from "sweetalert2";
const store = useMyStore();

export default defineNuxtRouteMiddleware(async (to, from) => {
    const tokenCookie = useCookie('token'); // ประกาศ tokenCookie
    const token = tokenCookie.value;

    const Token_expired = (text) => {
        Swal.fire({
            position: "top",
            icon: "warning",
            title: text,
            showConfirmButton: false,
            timer: 1500,
        })

        setTimeout(() => {
            // // ถ้าไม่มีโทเคน ให้ redirect ไปหน้า login
            // หลังจาก Swal ทำงานครบ 1.5 วินาทีแล้วเปลี่ยนหน้า
            navigateTo('/');
        }, 1500);

    }
    if (token) {
        // ตรวจสอบว่าโทเคนหมดอายุหรือไม่
        const { data: decodedToken } = await store.fetchUserProfile()
        console.log("Login error :", decodedToken.statusCode);
        if (decodedToken && (decodedToken.statusCode == 403 || decodedToken.statusCode == 401)) {

            // ถ้าโทเคนหมดอายุ redirect ไปหน้า login
            // ตั้งค่า cookie ให้หมดอายุเพื่อลบ
            tokenCookie.value = '';  // ตั้งค่าเป็นค่าว่าง
            tokenCookie.expire = new Date(0);  // กำหนดให้หมดอายุไปแล้ว;

            Token_expired("Token expired!")
        }

    } else {
        Token_expired("not have permission")
    }

});
