import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { username, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 5);
  try {
    await connectDB();
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
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
