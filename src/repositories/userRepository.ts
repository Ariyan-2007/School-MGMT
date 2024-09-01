import { User } from "../models/user";

export class UserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async create(user: User): Promise<User> {
    const userData = this.users.find((userData) => userData.id === user.id);
    if (!userData) {
      this.users.push(user);
      return user;
    } else {
      throw new Error(`User with id ${user.id} already exists`);
    }
  }
}
