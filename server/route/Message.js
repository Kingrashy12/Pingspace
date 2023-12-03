import express from "express";
import { createMessage, getMessage } from "../controller/Message.js";

const router = express.Router();

router.get("/all/:chatId", getMessage);
router.post("/msg", createMessage);

export default router;
