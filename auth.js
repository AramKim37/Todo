import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";

export const { auth, signin, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Crendentials({
      async authorize(credentials) {
        console.log("these are the credential: ", credentials);
        return null;
      },
    }),
  ],
});
