import { Request, Response } from "express";
import { getUserById, createNewUser } from "../services/userService";
import { User } from "../models/user";

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    res.json(user);
  } catch (error: any) {
    console.error(`Controller Error: ${error.message}`); // Print the error in the controller layer
    res.status(404).json({ error: error.message }); // Send a 500 Internal Server Error response
  }
};

export const createUser = async (req: Request, res: Response) => {
  const userData: User = req.body;
  try {
    const newUser = await createNewUser(userData);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(403).json({ error: error.message });
  }
};
