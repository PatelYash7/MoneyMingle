"use server";
import db from "@moneymingle/db/client";
import { User } from "../../types/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../authoptions/auth";

export const getFriendsDetails = async (value: string) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const Friends:User[] = await db.user.findMany({
    where: {
      number: {
        startsWith: value,
      },
    },
  });
  if (!Friends) {
    return {
      Friends: {
        id: "",
        email: "",
        name: "",
        number: "",
        password: "",
      },
    };
  }
  return {
    Friends: Friends.filter((x:User)=>userId !==x.id),
  };
};
