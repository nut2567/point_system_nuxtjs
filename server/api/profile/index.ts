import jwt, { type JwtPayload } from 'jsonwebtoken';
import { createError, type H3Event } from 'h3';
import { users } from '../../data/mockData';

const secretKey = 'P@55w0rD';

type TokenPayload = JwtPayload & {
  userInfo?: {
    username?: string;
  };
};

export const verifyToken = async (event: H3Event) => {
  const authorization = event.node.req.headers.authorization;
  const token = authorization?.split(' ')[1];

  if (!token) {
    throw createError({ statusCode: 403, message: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as TokenPayload;
    event.context.user = decoded.userInfo?.username;
  } catch (err) {
    const error = err as Error;

    if (error.name === 'TokenExpiredError') {
      throw createError({ statusCode: 401, message: 'Token expired!' });
    }

    if (error.name === 'JsonWebTokenError') {
      throw createError({ statusCode: 403, message: 'Invalid token!' });
    }

    if (error.name === 'NotBeforeError') {
      throw createError({ statusCode: 403, message: 'Token not active yet!' });
    }

    throw createError({ statusCode: 403, message: 'Failed to authenticate token!' });
  }
};

export default defineEventHandler(async (event) => {
  await verifyToken(event);

  const username = event.context.user;
  const user = users.find((u) => u.username === username);

  if (!user) {
    throw createError({ statusCode: 404, message: 'User not found!' });
  }

  return { user };
});
