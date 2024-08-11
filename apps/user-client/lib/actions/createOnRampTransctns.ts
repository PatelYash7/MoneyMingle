"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../authoptions/auth";
import db from "@moneymingle/db/client";

export async function createOnRampTransctns(amount: number, provider: string) {
  const session = await getServerSession(authOptions);
  const token = Math.random().toString();
  const userId = session?.user.id;
  if (!userId || amount == 0) {
    return {
      message: "Failure",
      status: false,
    };
  }
  await db.onRampTransaction.create({
    data: {
      userId,
      amount: amount,
      status: "PROCESSING",
      startTime: new Date(),
      provider,
      token,
    },
  });
  const checkAccount = await db.balance.findMany({
    where: {
      userId: userId,
    },
  });
  if (checkAccount.length == 0) {
    await db.balance.create({
      data: {
        userId: userId,
        locked: amount,
      },
    });
  } else {
    await db.balance.update({
      where:{
        userId:userId
      },
      data:{
        locked:{
          increment:amount
        }
      }
    });
  }
  return {
    message: "On ramp transaction Added",
    status: true,
  };
}
