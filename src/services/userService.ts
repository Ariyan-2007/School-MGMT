import { UserRepository } from "../repositories/userRepository";
import { IUser } from "../models/Users/user";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(
    name: string,
    email: string,
    role: string
  ): Promise<IUser> {
    return this.userRepository.createUser(name, email, role);
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return this.userRepository.getUserById(id);
  }

  public async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.getAllUsers();
  }
}
