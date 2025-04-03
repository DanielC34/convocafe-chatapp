import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//For connecting to database in MongoDB
const connectDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
