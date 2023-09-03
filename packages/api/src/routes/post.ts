import express from "express";
import { post } from "../controllers/";

const router = express.Router();

router.post("/post", post);

export default router;
