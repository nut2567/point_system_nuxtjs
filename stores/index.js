import { defineStore } from 'pinia';

const router = useRouter();
import axios from "axios";

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
        async login(username, password) {
            try {
                const response = await useFetch("http://localhost:5000/users/login", {
                    method: "POST",
                    body: {
                        username: username,
                        password: password,
                    },
                });
                console.log("Logging in with:", response);
                this.token = response.data._rawValue.token;
                localStorage.setItem("token", response.data._rawValue.token); // เก็บ token ใน local storage
                return response.data._rawValue
            } catch (error) {
                console.error("Login error:", error);
            }
        },

        async getUserLocal(token = localStorage.getItem("token")) {// ดึง token จาก localStorage

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
                    console.log("userInfo", userData); // ข้อมูลใน JWT token
                    this.userinfo = userData.userInfo
                } else {
                    console.error("Invalid token format");
                }
            } else {
                console.error("Token is missing");
            }
        },
        async fetchUserProfile(token = localStorage.getItem("token")) {
            try {
                const response = await axios.get('http://localhost:5000/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}` // ส่ง token ถ้ามี
                    }
                });
                this.userinfo = response.data; // Set user data
                console.log("userInfo", response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching user profile:', error);
                // ตรวจสอบว่าโทเคนหมดอายุหรือไม่
                return error.response
            }
        },

    },
});