import { Router } from "express";
import { genaerateContent } from "../controllers/ai.controller";

const router = Router()

router.post("/genarate", genaerateContent);

export default router;