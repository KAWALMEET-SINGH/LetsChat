import express from "express";
import { sendMessage ,getMessage} from "../controllers/message.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.post('/send/:id',verifyToken,sendMessage)
router.get('/:id',verifyToken,getMessage)

export default router