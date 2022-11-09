import express, { Router } from "express";
import { createUser, getMe } from "../controllers/users";

const router: Router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "You have reached users!" });
});

router.post("/", createUser);
router.get("/me", getMe);

export default router;
