import { getServerSession } from "next-auth";
import { authOptions } from "../authoptions/auth";
import db from "@moneymingle/db/client";

export const getUserDetails = async () => {
  const session = await getServerSession(authOptions);
  const id = await session.user.id;
  const User = await db.user.findFirst({
    where: {
      id: id,
    },
  });
  if (!User) {
    return {
      id: "",
      email: "",
      name: "",
      number: "",
      password: "",
    };
  }
  return User;
};
