
import { rewards } from '../../data/mockData';

export default defineEventHandler(async () => {
    return { rewards };
    switch (method) {
        case 'GET':
            return await handleGetUser(event);
        case 'POST':
            return await handleCreateUser(event);
        case 'PUT':
            return await handleUpdateUser(event);
        case 'DELETE':
            return await handleDeleteUser(event);
        default:
            return sendError(event, createError({ statusCode: 405, message: 'Method Not Allowed' }));
    }
});


// ฟังก์ชันจัดการ GET request
async function handleGetUser(event) {
    const authorization = event.node.req.headers['authorization'];
    const token = authorization?.split(' ')[1];

    if (!token) {
        return sendError(event, createError({ statusCode: 403, message: 'No token provided.' }));
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        const user = users.find(u => u.username === decoded.userInfo.username);
        if (!user) {
            return sendError(event, createError({ statusCode: 404, message: 'User not found!' }));
        }
        return user;
    } catch (err) {
        return handleTokenError(err, event);
    }
}

// ฟังก์ชันจัดการ POST request
async function handleCreateUser(event) {
    const body = await readBody(event);
    // เพิ่ม logic สำหรับการสร้างผู้ใช้ใหม่ที่นี่
    return { message: 'User created successfully!' };
}

// ฟังก์ชันจัดการ PUT request
async function handleUpdateUser(event) {
    const body = await readBody(event);
    // เพิ่ม logic สำหรับการอัปเดตผู้ใช้ที่นี่
    return { message: 'User updated successfully!' };
}

// ฟังก์ชันจัดการ DELETE request
async function handleDeleteUser(event) {
    const { id } = event.context.params; // สมมุติว่าคุณส่ง ID มาทาง URL
    // เพิ่ม logic สำหรับการลบผู้ใช้ที่นี่
    return { message: 'User deleted successfully!' };
}

// ฟังก์ชันจัดการข้อผิดพลาดของ token
function handleTokenError(err, event) {
    if (err.name === 'TokenExpiredError') {
        return sendError(event, createError({ statusCode: 401, message: 'Token expired!' }));
    } else if (err.name === 'JsonWebTokenError') {
        return sendError(event, createError({ statusCode: 403, message: 'Invalid token!' }));
    } else {
        return sendError(event, createError({ statusCode: 403, message: 'Failed to authenticate token!' }));
    }
}