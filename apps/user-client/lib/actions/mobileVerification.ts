"use server";
import db from "@moneymingle/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../authoptions/auth";

export const mobileVerification = async (number: string) => {
  const session = await getServerSession(authOptions);
  const currUser = session?.user.id;

  const user = await db.user.findFirst({
    where: {
      number: number,
    },
  });
  if (!user || user.id == currUser) {
    return {
      id: "",
      email: "",
      name: "",
      number: "",
      password: "",
    };
  }
  return user;
};
