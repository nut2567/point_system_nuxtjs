import { users as initialUsers } from './mockData';

let users = [...initialUsers]; // สร้างสำเนาของข้อมูล users สำหรับใช้งาน

export const getUsers = () => users; // ฟังก์ชันสำหรับดึงข้อมูล users ปัจจุบัน
export const resetUsers = () => {
  users = [...initialUsers]; // รีเซ็ต users ให้เป็นค่าเริ่มต้น
};
