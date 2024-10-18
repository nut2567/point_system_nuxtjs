import jwt from 'jsonwebtoken';
import { getUsers  } from '../data/state'; 

const users = getUsers(); 
const secretKey = 'P@55w0rD'; // Secret key สำหรับ sign token

export default defineEventHandler(async (event) => {
  // อ่านข้อมูลจาก body ที่ส่งมาจาก client
  const body = await readBody(event);
  const { username, password } = body;

  // ค้นหาผู้ใช้จาก mock data
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // สร้าง JWT token พร้อมใส่ข้อมูล user ลงใน token
    const token = jwt.sign({ userInfo: user }, secretKey, { expiresIn: '1h' });

    // ส่ง token กลับไปยัง client
    return { message: 'Login successful', token: token };
  } else {
    // ส่ง response error กรณี username/password ไม่ถูกต้อง
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid username or password',
    });
  }
});
