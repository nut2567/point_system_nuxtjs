
import { rewards } from '../../data/mockData';
import { getUsers  } from '../../data/state';

const users = getUsers(); 
export default defineEventHandler(async (event) => {


    const body = await readBody(event);

    const { username, Redeem_id } = body;

    const user = users.find(u => u.username === username);
    if (!user) {
        throw createError({
            statusCode: 404,
            statusMessage: 'User not found!',
        });
    }
    // ค้นหาผู้ใช้จาก mock data
    const reward = rewards.find(u => u.id == Redeem_id);
    if (!reward) {
        throw createError({
            statusCode: 404,
            statusMessage: 'rewards not found!',
        });
    }


    let foundReward = users.some(
        (item) => {
            if (item.username === username) {
                return item.coupong.some(u => u.reward_id == Redeem_id);
            }
        }
    );
    if (foundReward) {

        return {
            status: 200, user: user,
            statusMessage: 'already reward'
        };
    }

    user.coupong.push({ reward_id: reward.id })
    user.points -= reward.points

    return {
         user: user,
        statusMessage: 'added Redeem'
    };

});
