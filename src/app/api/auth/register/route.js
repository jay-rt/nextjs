import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { username, email, password } = await req.json();
  await connectDB();
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser)
    return new NextResponse("Username or email is already taken", {
      status: 403,
    });

  const hashedPassword = await bcrypt.hash(password, 5);
  try {
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return new NextResponse("New user has been created successfully", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
