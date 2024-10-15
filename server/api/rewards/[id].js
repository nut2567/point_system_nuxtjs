
import { rewards } from '../mockData';

export default defineEventHandler(async (event) => {

    const { id } = event.context.params;

    const rewardId = parseInt(id);
    const reward = rewards.find(r => r.id === rewardId);

    if (!reward) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Reward not found',
        });
    }



    return { reward };
});
