// auth.config.ts
import type { NextAuthConfig } from "next-auth";
import { prisma } from "@/lib/prisma";

export default {
    providers: [],
    callbacks: {
        async session({ session, user }) {
          // Attach user ID to the session object
          if (user) {
            session.user.id = user.id;
          }
          return session;
        },
        async signIn({ user, account, profile }) {
          // Handle sign-in logic here
          return true;
        },
        async jwt({ token, user }) {
          // Attach user ID to the JWT token
          if (user) {
            token.id = user.id;
          }
          return token;
        }
      },
      events: {
        
      }
  
} satisfies NextAuthConfig;