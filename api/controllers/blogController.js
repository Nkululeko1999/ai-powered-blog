import Repository from "../repositories/Repository.js";

const blogRepository = new Repository("blogs");

export const createBlogController = async (req, res, next) => {
  try {
    const { title, content, imageUrl, authorId, categoryId, status } = req.body;

    const newBlog = await blogRepository.save({
      title,
      content,
      image_url: imageUrl,
      author_id: authorId,
      category_id: categoryId,
      status,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return res.status(201).json({ success: true, data: newBlog });
  } catch (error) {
    return next(error);
  }
};