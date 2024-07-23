import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("these are the credential: ", credentials);
        return null;
      },
    }),
  ],
});
