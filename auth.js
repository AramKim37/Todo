import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";
import connectToDB from "./utils/connectToDB";
import User from "./models/userModel";
import bcrypt from "bcrypt";
import { log } from "console";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          await connectToDB();
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;
          const isCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isCorrect) return null;
          return user;
        } catch (error) {
          console.log("error: ", error);
          return null;
        }
      },
    }),
  ],
});
