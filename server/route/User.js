import express from "express";
import { getUsers } from "../controller/User.js";

const router = express.Router();

router.get("/", getUsers);

export default router;
