import { rewards, users } from '../../data/mockData';

type RedeemBody = {
  username?: string;
  Redeem_id?: number | string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<RedeemBody>(event);
  const { username, Redeem_id } = body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found!',
    });
  }

  const rewardId = Number(Redeem_id);
  const reward = rewards.find((u) => u.id === rewardId);
  if (!reward) {
    throw createError({
      statusCode: 404,
      statusMessage: 'rewards not found!',
    });
  }

  const foundReward = user.coupong.some((u) => u.reward_id === rewardId);
  if (foundReward) {
    return {
      status: 200,
      user,
      statusMessage: 'already reward',
    };
  }

  user.coupong.push({ reward_id: reward.id });
  user.points -= reward.points;

  return {
    user,
    statusMessage: 'added Redeem',
  };
});
