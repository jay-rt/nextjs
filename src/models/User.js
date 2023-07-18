import mongoose from "mongoose";

const { Schema } = mongoose;

//Defining Schema
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

//Exporting the model
const User = mongoose.model("User", userSchema);
export default User;
