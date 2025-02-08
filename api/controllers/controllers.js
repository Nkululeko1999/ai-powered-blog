import Repository from "../repositories/Repository.js";
import bcryptjs from "bcryptjs";

const userRepository = new Repository("users");

export const registerController = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await userRepository.findOne({ email });
        
        if (user) {
            const error = new Error("User already exists, please login");
            error.statusCode = 409;
            return next(error);
        }

        // Hash password
        const hashedPassword = await bcryptjs.hashSync(password, 12);
        
        const newUser = await userRepository.save({ email, password: hashedPassword });

        const { password: userPassword, ...rest } = newUser;

        return res.status(201).json({ success: true, message: "successfully created", newUser: rest });        
        
    } catch (error) {
        return next(error);
    }
}