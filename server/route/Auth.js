import express from "express";
import { RegisterUser, loginUser } from "../controller/Auth.js";

const router = express.Router();

router.post("/new", RegisterUser);
router.post("/login", loginUser);

export default router;
