import { defineStore } from 'pinia';


export const useMyStore = defineStore('myStore', {
    state: () => ({
        userinfo: {},
        points: 0,
        rewards: [],
        token: null,
        apiData: [],
        idProduct: null,
    }),
    actions: {
        async getUserLocal(token = useCookie('token').value) {// ดึง token จาก localStorage

            function base64UrlDecode(str) {
                return decodeURIComponent(
                    atob(str.replace(/-/g, "+").replace(/_/g, "/"))
                        .split("")
                        .map(function (c) {
                            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                        })
                        .join("")
                );
            }
            if (token) {
                const parts = token.split(".");
                if (parts.length === 3) {
                    const payload = parts[1];
                    const decodedPayload = base64UrlDecode(payload);
                    const userData = JSON.parse(decodedPayload);
                    // console.log("userInfo", userData); // ข้อมูลใน JWT token
                    this.userinfo = userData.userInfo
                } else {
                    console.error("Invalid token format");
                }
            } else {
                console.error("Token is missing");
            }
        },
        async fetchUserProfile(token = useCookie('token').value) {

            try {
                // ใช้ useFetch ในการดึงข้อมูลแทน axios for ssr
                const { data, error } = await useFetch('/api/profile', {
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${token}` // ส่ง token ถ้ามี
                    }
                });

                // ตรวจสอบข้อผิดพลาด
                if (error.value) {
                    console.error('Error fetching user profile:', error);
                    return { data:  error.value};
                }

                this.userinfo = data.value.user;
                return { data: data.value.user };
            } catch (error) {
                // console.error('Error fetching user profile:', error);
                // ตรวจสอบว่าโทเคนหมดอายุหรือไม่
                return error.response
            }
        },

    },
}); 