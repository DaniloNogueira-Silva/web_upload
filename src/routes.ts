import { Router } from "express";
import { PostController } from "./controller/PostController";
import upload from "./config/multer";

export const router = Router();

const postController = new PostController();

router.post("/", upload.array("images"), postController.store);
