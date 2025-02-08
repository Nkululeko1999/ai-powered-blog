import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pool from "./configs/dbConfigs.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import router from "./routes/routes.js";

//Create app
const app = express();

//Configurations
dotenv.config();

//Other const vars
const port = process.env.PORT;
const frontendUrl = process.env.EXPRESS_FRONTEND_URL;

//Application Level Middlewares
app.use(
  cors({
    origin: [frontendUrl, "http://localhost:5174"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Establish database connection first before starting the server
const connect = async () => {
  try {
    // Wait for the database connection to be established
    await pool.connect();
    console.log("Successfully connected to Database.");

    // Start the Express.js server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to the database", err.message);
  }
};

//Invoke connect func
connect();

// Test api
app.get("/api/test", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Test working",
  });
});

// Route Level Middleware
app.use('/api', router);

// Error Level Middleware
app.use(errorHandler);