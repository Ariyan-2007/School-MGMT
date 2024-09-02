import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { UserRepository } from "./repositories/userRepository";
import { UserService } from "./services/userService";
import { UserController } from "./controllers/userController";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());

// Initialize database connection
import connectDatabase from "./config/database";
connectDatabase();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

app.use("/api/users", userRoutes(userController));

export default app;
