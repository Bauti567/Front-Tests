import { Router } from "express";
import { createCat } from "../controllers/cat.controller.js";


const router = Router()

router.post('/cat', createCat)


export default router;