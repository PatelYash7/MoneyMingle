"use server";
import db from "@moneymingle/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../authoptions/auth";

export const setUserName = async ({

  name,
}: {

  name: string;
}) => {
  const session = await getServerSession(authOptions);
  const id =session.user.id;
  const data = await db.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  if(data){
    return {
      message:"UserName Updated"
    }
  }
  return {
    message: "Sorry, please try again",
  };
};
