import User, { IUser } from "../models/Users/user";

export class UserRepository {
  public async createUser(
    name: string,
    email: string,
    role: string
  ): Promise<IUser> {
    const newUser = new User({ name, email, role });
    return await newUser.save();
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id).exec();
  }

  public async getAllUsers(): Promise<IUser[]> {
    return await User.find().exec();
  }
}
