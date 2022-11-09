import { Request, Response } from "express";
import { JwtRequest, TokenPayload } from "../app";
import { getUser, newUser } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  // TODO: check required fields
  try {
    await newUser(req.body);
    res.json({ message: "User created!" });
  } catch (err) {
    console.error("ERR", err);
    res.status(409).json({ error: "User already exists" });
  }
};

export const getMe = async (req: JwtRequest<TokenPayload>, res: Response) => {
  const userId: string | undefined = req.user?.userId;

  try {
    const user = await getUser(userId as string);

    res.json(user);
  } catch (err) {
    res.status(404).json({ error: "cant find user" });
  }
};
