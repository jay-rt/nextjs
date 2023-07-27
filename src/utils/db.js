import mongoose from "mongoose";

//variable for tracking connection to database
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Connected to database already");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("Successfully connected to the database");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
