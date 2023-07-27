import Post from "@/models/Post";
import connectDB from "@/utils/db";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find();
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new Response("Database Error", { status: 500 });
  }
};
