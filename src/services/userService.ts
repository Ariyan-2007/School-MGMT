import { User } from "../models/user";
import { UserRepository } from "../repositories/userRepository";

const userRepository = new UserRepository();

export const getUserById = async (id: string): Promise<User> => {
  return userRepository.findById(id);
};

export const createNewUser = async (userData: User): Promise<User> => {
  return userRepository.create(userData);
};
