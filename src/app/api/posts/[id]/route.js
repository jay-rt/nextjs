import Post from "@/models/Post";
import connectDB from "@/utils/db";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const post = await Post.findById(params.id).populate("userId");
    if (!post) return new Response("Post not found", { status: 404 });
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new Response("Database Error", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    await Post.findByIdAndDelete(params.id);
    return new Response("Successfully deleted the post", { status: 200 });
  } catch (err) {
    return new Response("Database Error", { status: 500 });
  }
};
