import { users  } from '../../data/mockData'; 
import jwt from 'jsonwebtoken';
import { sendError, createError } from 'h3';

const secretKey = 'P@55w0rD'; // ใช้ secret key ของคุณ

// ตรวจสอบ token
const verifyToken = async (event) => {
  const authorization = event.node.req.headers['authorization'];
  const token = authorization?.split(' ')[1];

  if (!token) {
    throw createError({ statusCode: 403, message: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    event.context.user = decoded.userInfo.username;
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      throw createError({ statusCode: 401, message: 'Token expired!' });
    } else if (err.name === 'JsonWebTokenError') {
      throw createError({ statusCode: 403, message: 'Invalid token!' });
    } else if (err.name === 'NotBeforeError') {
      throw createError({ statusCode: 403, message: 'Token not active yet!' });
    } else {
      throw createError({ statusCode: 403, message: 'Failed to authenticate token!' });
    }
  }
};

export { verifyToken };

// Handler สำหรับดึงข้อมูลผู้ใช้
export default defineEventHandler(async (event) => {
  // เรียก middleware ตรวจสอบ token
  await verifyToken(event);

  // ดึงข้อมูลผู้ใช้จาก context หลังจากตรวจสอบ token
  const username = event.context.user;
  const user = users.find(u => u.username === username);

  if (!user) {
    throw createError({ statusCode: 404, message: 'User not found!' });
  }

  // ส่งข้อมูลผู้ใช้กลับไป
  return { user };
});
