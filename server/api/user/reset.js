import { resetUsers } from '../../data/state';

export default defineEventHandler(() => {
  resetUsers(); // รีเซ็ตข้อมูล users
  return { message: 'Users data has been reset to initial state' };
});
