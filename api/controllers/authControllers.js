import Repository from "../repositories/Repository.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userRepository = new Repository("users");

export const registerController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await userRepository.findOne({ email });

    if (user) {
      const error = new Error("User already exists, please login");
      error.statusCode = 409;
      return next(error);
    }

    // Hash password
    const hashedPassword = await bcryptjs.hashSync(password, 12);

    const newUser = await userRepository.save({
      email,
      password: hashedPassword,
    });

    const { password: _, ...rest } = newUser;

    return res
      .status(201)
      .json({ success: true, message: "successfully created", user: rest });
  } catch (error) {
    return next(error);
  }
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await userRepository.findOne({ email });

    if (!user) {
      const error = new Error("User not found, please register");
      error.statusCode = 404;
      return next(error);
    }

    // Compare provided password with stored hash
    const isPasswordValid = bcryptjs.compareSync(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      return next(error);
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: _, ...userDetails } = user;

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user: userDetails,
      });
  } catch (error) {
    return next(error);
  }
};
