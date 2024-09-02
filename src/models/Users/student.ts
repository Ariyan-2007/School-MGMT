import mongoose from "mongoose";
import User, { IUser } from "./user";

export interface IStudent extends IUser {
  graduated: boolean;
  dateOfBirth?: Date;
  enrollmentDate?: Date;
  graduationDate?: Date;
}

const studentSchema = new mongoose.Schema({
  graduated: { type: Boolean, default: false },
  dateOfBirth: { type: Date },
  enrollmentDate: { type: Date },
  graduationDate: { type: Date },
});

// Inherit from User schema
const Student = User.discriminator<IStudent>("Student", studentSchema);

export default Student;
