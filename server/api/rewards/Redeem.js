
import { rewards } from '../mockData';

export default defineEventHandler(async () => {

    
  const body = await readBody(event);

  const { username, password } = body;

    // const { username, Redeem_id } = req.body;

  const user = users.find(u => u.username === username);
  console.log(req.user)
  if (!user) {
    return res.status(404).json({ message: 'User not found!' });
  }
  // ค้นหาผู้ใช้จาก mock data
  const reward = rewards.find(u => u.id == Redeem_id);
  if (!reward) {
    return res.status(404).json({ message: 'rewards not found!' });
  }


  let foundReward = users.some(
    (item) => {
      if (item.username === username) {
        return item.coupong.some(u => u.reward_id == Redeem_id);
      }
    }
  );
  if (foundReward) {
    return res.status(200).json({ user: user, message: 'already reward' });
  }

  user.coupong.push({ reward_id: reward.id })
  user.points -=  reward.points
  res.status(200).json({ user: user, message: 'added Redeem' });
  
  return { rewards };
});
