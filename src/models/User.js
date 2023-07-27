import { Schema, model, models } from "mongoose";

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
const User = models.User || model("User", userSchema);
export default User;
