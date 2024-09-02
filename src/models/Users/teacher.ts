import mongoose from "mongoose";
import User from "./user";

// Define additional fields specific to Teacher
const teacherSchema = new mongoose.Schema({
  department: { type: String },
  hireDate: { type: Date },
});

// Inherit from User schema
const Teacher = User.discriminator("Teacher", teacherSchema);

export default Teacher;
