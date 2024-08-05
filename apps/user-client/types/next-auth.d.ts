import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string | null;
    name: string | null;
    number: string;
    password: string;
  }
  interface Session {
    user: {
      id: string;
      email: string | null;
      name: string | null;
      number: string | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string | null;
    email: string | null;
    number:string | null
  }
}
