'use server';

import * as z from "zod";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";
import { LoginSchema } from "@/schemas/auth";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);
  
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    
    throw error;
  }
}

export async function logout() {
  await signOut();
}
