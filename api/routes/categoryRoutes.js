import express from 'express';
import { createCategoryController, getAllCategoriesController } from '../controllers/categoryController.js';
import { verifyJwt } from '../middlewares/verifyJwt.js';

const category_router = express.Router();

category_router.get('/', getAllCategoriesController);

category_router.use(verifyJwt);
category_router.post('/', createCategoryController);

export default category_router;
