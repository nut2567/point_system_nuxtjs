import { users } from '../../data/mockData';
import { verifyToken } from '../profile/index';

export default defineEventHandler(async (event) => {
  
  await verifyToken(event);

  // ดึงข้อมูลผู้ใช้จาก context หลังจากตรวจสอบ token
  const username = event.context.user;

  const user = users.find(u => u.username === username);

  if (!user) {
    throw createError({ statusCode: 404, message: 'User not found!' });
  }
  user.coupong = []
  return { user,message: 'Users data has been reset to initial state' };
});
