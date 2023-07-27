import Post from "@/models/Post";
import connectDB from "@/utils/db";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const post = await Post.findById(params.id);
    if (!post) return new Response("Post not found", { status: 404 });
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new Response("Database Error", { status: 500 });
  }
};
