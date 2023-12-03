import express from "express";
import { CreateChat, findChat, findUserChat } from "../controller/Chat.js";

const router = express.Router();

router.post("/new", CreateChat);
router.get("/find/", findChat);
router.get("/find/:userId/all", findUserChat);

export default router;
