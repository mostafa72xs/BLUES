import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/lib/fakeDB";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = getUserByEmail(credentials.email);
        if (user && user.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: 'process.env.NEXTAUTH_SECRET'
});
