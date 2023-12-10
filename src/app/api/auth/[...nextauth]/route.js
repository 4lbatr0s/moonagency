import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utilities/db";
import User from "@/models/User";
import bcyrpt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials", //INFO: we will use this id with signIn and signOut methods of nextjs.
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        const user = User.findOne({ email: credentials.email });
        if (user) {
          //check password
          const isPasswordCorrect = bcyrpt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Wrong credentials!");
          }
        } else {
          throw new Error("User not found!");
        }
        try {
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages:{
    error:"/dashboard/login" //INFO: if there is an error, it will show it in login page.
  }
});

export { handler as GET, handler as POST };
