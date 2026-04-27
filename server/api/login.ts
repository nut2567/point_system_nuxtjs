import jwt from "jsonwebtoken";
import { users } from "../data/mockData";

const secretKey = "P@55w0rD";

type LoginBody = {
  username?: string;
  password?: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginBody>(event);
  const username = body.username?.trim();
  const password = body.password?.trim();

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Username and password are required",
    });
  }

  // const user = users.find((u) => u.username === username && u.password === password);
  const user = users[0]; // For testing purposes, we will use the first user in the mock data

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
    });
  }

  const token = jwt.sign({ userInfo: user }, secretKey, { expiresIn: "1h" });

  return { message: "Login successful", token };
});
