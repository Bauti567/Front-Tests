import { Router } from "express";
import { pong } from "../controllers/index.controller.js";
import { pool } from "../db.js";

const router = Router()

router.get('/ping', pong)


export default router;