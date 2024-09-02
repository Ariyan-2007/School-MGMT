import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URI || "";
const maxRetries = 5; // Number of retries
const retryDelay = 5000; // Delay between retries in milliseconds

const connectDatabase = async (retries = 0) => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(
      `Database connection failed (Attempt ${retries + 1}/${maxRetries}):`,
      error
    );

    if (retries < maxRetries) {
      setTimeout(() => connectDatabase(retries + 1), retryDelay);
    } else {
      console.error(
        "Max retries reached. Database connection could not be established."
      );
      // Handle further actions here if needed, like alerting or falling back to local storage
    }
  }
};

connectDatabase(); // Initial call to connect to the database

export default connectDatabase;
