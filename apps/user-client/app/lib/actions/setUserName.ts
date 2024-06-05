"use server";
import db from "@moneymingle/db/client";

export const setUsername = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const data = await db.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  return {
    message: data,
  };
};
