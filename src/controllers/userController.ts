import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { UserDTO } from "../models/Users/userDTO";
import { validate } from "class-validator";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public createUser = async (req: Request, res: Response): Promise<void> => {
    const userDTO = new UserDTO(req.body.name, req.body.email, req.body.role);

    const errors = await validate(userDTO);
    if (errors.length > 0) {
      res.status(400).json({ errors });
      return;
    }

    try {
      const user = await this.userService.createUser(
        userDTO.name,
        userDTO.email,
        userDTO.role
      );
      res.status(201).json(user);
    } catch (error: any) {
      console.error("Error creating user:", error); // Log the error for debugging
      res
        .status(500)
        .json({ error: "Failed to create user", details: error.message });
    }
  };

  public getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve user" });
    }
  };

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve users" });
    }
  };
}
