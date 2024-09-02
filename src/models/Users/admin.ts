import mongoose from "mongoose";
import User from "./user";

// Define additional fields specific to Admin
const adminSchema = new mongoose.Schema({
  permissions: [{ type: String }],
});

// Inherit from User schema
const Admin = User.discriminator("Admin", adminSchema);

export default Admin;
