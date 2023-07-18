import mongoose from "mongoose";

const { Schema } = mongoose;

//Defining Schema
const postSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

//Exporting the model
const Post = mongoose.model("Post", postSchema);
export default Post;
