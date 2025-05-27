// app/auth.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import authConfig from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas/auth";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedCredentials = await LoginSchema.safeParse(credentials);
        if (!validatedCredentials.success) return null;
        const { email, password } = validatedCredentials.data;

        const user = await getUserByEmail(email);

        if (!user || !user.passwordHash) return null;

        const passwordsMatch = await bcrypt.compare(password, user.passwordHash);

        if (passwordsMatch) return user;
        return null;
      },
    }),
  ],
  pages: {},
});
