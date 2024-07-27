"use server";

import { signIn } from "@/auth";
import connectToDB from "@/utils/connectToDB";
import { AuthError } from "next-auth";
import User from "@/models/userModel";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credencilas.";
        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
}

export async function registerUser(info) {
  try {
    await connectToDB();
    const { username, email, password } = info;
    const exist = await User.findOne({ $or: [{ email }, { username }] });
    if (exist) return { error: "Username or email already registered." };
    const hashedPasswords = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      password: hashedPasswords,
    });
    return;
  } catch (error) {
    console.log({ error });
  }
}
