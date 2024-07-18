"use server";

import { getServerSession } from "next-auth";
import db from "@moneymingle/db/client";
import { authOptions } from "../authoptions/auth";

export const p2pTransfer = async (number: string, amount: Number) => {
  const session = await getServerSession(authOptions);
  const senderId = session.user.id;
  if (!senderId) {
    return {
      message: "Sender Not Authenticated",
    };
  }
  const Receiver = await db.user.findFirst({
    where: {
      number: number,
    },
  });
  if (!Receiver) {
    return {
      message: "Receiver Not Found",
    };
  }
  await db.$transaction(async (tx: any) => {
    //Locking for Record by
    // tx.$queryRaw
    const senderBalance = await tx.balance.findFirst({
      where: { userId: senderId },
    });
    if (!senderBalance || senderBalance?.amount < Number(amount)) {
      return {
        message: "Insufficient Balance",
      };
    } else {
      await tx.balance.update({
        where: {
          userId: senderId,
        },
        data: {
          amount: {
            decrement: Number(amount),
          },
        },
      }),
        await tx.balance.update({
          where: {
            userId: Receiver.id,
          },
          data: {
            amount: {
              increment: Number(amount),
            },
          },
        });
      await tx.p2pTransfer.create({
        data: {
          SenderUserId: senderId,
          ReceiverUserId: Receiver.id,
          amount: Number(amount),
          timestamp: new Date(),
        },
      });
    }
  });
};
