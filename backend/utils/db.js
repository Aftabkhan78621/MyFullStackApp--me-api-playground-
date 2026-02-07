// 3. step

import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDb connected")
  } catch (error) {
    console.log("MongoDb error: ", error);
  }
};

export default connectDB
