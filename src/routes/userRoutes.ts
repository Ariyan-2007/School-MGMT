import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

const userRoutes = (userController: UserController) => {
  router.post("/", userController.createUser);
  router.get("/:id", userController.getUserById);
  router.get("/", userController.getAllUsers);
  return router;
};

export default userRoutes;
