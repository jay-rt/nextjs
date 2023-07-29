import Post from "@/models/Post";
import connectDB from "@/utils/db";

export const GET = async (req) => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  try {
    await connectDB();
    const posts = userId ? await Post.find({ userId }) : await Post.find();
    if (posts.length === 0)
      return new Response("There is no posts from this user", { status: 404 });
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new Response("Database Error", { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  console.log(body);
  try {
    await connectDB();
    const post = new Post(body);
    await post.save();
    return new Response("Successfully created new post", { status: 201 });
  } catch (err) {
    return new Response("Database Error", { status: 500 });
  }
};
