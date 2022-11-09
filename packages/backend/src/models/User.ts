import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import dotenv from "dotenv";
import { UserItem } from "@my-fullstack-app/shared";

dotenv.config();

const salt = parseInt(process.env.SALT_NUM || "10");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: { type: String, required: true },
});

userSchema.pre(/save/, async function (next): Promise<void> {
  if (this.modifiedPaths().includes("password")) {
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
  next();
});

const userModel = mongoose.model<UserItem>("users", userSchema);

export const newUser = async (user: UserItem): Promise<UserItem> => {
  const newUser = await userModel.create(user);
  return newUser;
};
export const getUser = async (userId: string): Promise<UserItem | null> => {
  const user = await userModel.findOne({ _id: userId });

  return user;
};

export const verifyUser = async (
  username: string,
  password: string
): Promise<UserItem | null> => {
  const user = (await userModel.findOne({ username })) as unknown as UserItem;

  return user && password && (await bcrypt.compare(password, user.password))
    ? user
    : null;
};
