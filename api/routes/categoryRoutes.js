import express from 'express';
import { createCategoryController } from '../controllers/categoryController.js';

const category_router = express.Router();

category_router.post('/', createCategoryController);

export default router;
