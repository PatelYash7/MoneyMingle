import prisma from "@moneymingle/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone",
          type: "text",
          placeholder: "Enter your phone number",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
      },
      // Adding User credentials type
      async authorize(credentials: any): Promise<any> {
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const exsistingUser = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (exsistingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            exsistingUser.password,
          );
          if (passwordValidation) {
            return exsistingUser;
          }
          return null;
        }
        try {
          const user = await prisma.user.create({
            data: {
              number: credentials.phone,
              email: credentials.email,
              password: hashedPassword,
            },
          });
          return user;
        } catch (e) {
          console.log(e);
        }

        // If Rejected
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "Jaishreeram",
  callbacks: {
    // Type adding needed  add fields in JWT
    async jwt({ token, user, session, trigger}) {
      console.log("JWT",{ token, user, session, trigger})
      if(trigger==="update" && session.name){
        await prisma.user.update({
          where:{
            id:token.id
          },
          data:{
            name:session.name
          }
        })
        token.name = session.name;
      }
      if(user){
        token.id=user.id.toString()
        token.name=user.name
        token.email=user.email
        token.number=user.number
      }
      return token;
    },
    async session({ token, session }) {
      if(token){
        session.user.id=token.id;
        session.user.name=token.name;
        session.user.email=token.email;
        session.user.number=token.number;
      }
      return session;
    },
  },
};
