import express from "express";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import {verifyToken} from "../utils/verifyUser.js"
const router = express.Router();

router.get('/:id', verifyToken,getUsersForSidebar);

export default router