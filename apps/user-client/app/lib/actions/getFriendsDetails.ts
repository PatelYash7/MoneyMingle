"use server";
import db from "@moneymingle/db/client";

export const getFriendsDetails = async (value: string) => {
  console.log(value);
  const Friends = await db.user.findMany({
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
    Friends: Friends,
  };
};
