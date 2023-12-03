import express from "express";
import { getUser, getUsers } from "../controller/User.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/one/:userId", getUser);

export default router;
