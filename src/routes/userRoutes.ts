import { Router } from "express";
import { createUser, getUser } from "../controller/userController";

const router = Router();

router.get("/:id", getUser);
router.post("/create", createUser);

export default router;
