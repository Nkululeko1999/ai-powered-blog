import express from "express";
import { createBlogController } from "../controllers/blogController.js";
import { verifyJwt } from "../middlewares/verifyJwt.js";

const blog_router = express.Router();

blog_router.use(verifyJwt);
blog_router.post('/', createBlogController);

export default blog_router;