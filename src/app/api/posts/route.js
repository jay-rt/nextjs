import Post from "@/models/Post";
import connectDB from "@/utils/db";

export const GET = async (req) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");

  try {
    await connectDB();
    const posts = username ? await Post.find({ username }) : await Post.find();
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new Response("Database Error", { status: 500 });
  }
};
