import Repository from "../repositories/Repository.js";

const categoryRepository = new Repository("categories");

export const createCategoryController = async (req, res, next) => {
  try {
    const { categoryName } = req.body;

    // Find category by name
    const category = await categoryRepository.findOne({ category_name: categoryName });

    if (category) {
        const error = new Error("Category already exists");
        error.statusCode = 409;
        return next(error);
    }

    const newCategory = await categoryRepository.save({ category_name: categoryName });

    return res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    return next(error);
  }
};

export const getAllCategoriesController = async (req, res, next) => {
    try {
      const categories = await categoryRepository.findAll();
      return res.status(200).json({ success: true, data: categories });
    } catch (error) {
      return next(error);
    }
  };