import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
