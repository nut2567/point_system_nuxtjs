import { rewards } from '../../data/mockData';

export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  const rewardId = Number(id);
  const reward = rewards.find((r) => r.id === rewardId);

  if (!reward) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Reward not found',
    });
  }

  return { reward };
});
