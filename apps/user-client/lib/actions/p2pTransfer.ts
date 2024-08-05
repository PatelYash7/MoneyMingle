"use server";
import { getServerSession } from "next-auth";
import db from "@moneymingle/db/client";
import { authOptions } from "../authoptions/auth";

export const p2pTransfer = async (number: string, amount: Number):Promise<{message:string}> => {
  const session = await getServerSession(authOptions);
  const senderId = session?.user.id;
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
  // Checks the Balance table for the receiver,
  const checkAccount = await db.balance.findMany({
    where: {
      userId: Receiver.id,
    },
  });
  if (checkAccount.length == 0) {
    //Created balance table for the Receiver if No account.
    await db.balance.create({
      data: {
        userId: Receiver.id,
        amount: Number(0),
        locked: 0,
      },
    });
  }
  try {
    const Result = await db.$transaction(async (tx: any) => {
      const senderBalance = await tx.balance.findFirst({
        where: { userId: senderId },
      });
      // Sender balance check
      if (!senderBalance || senderBalance?.amount < Number(amount)) {
        return {
          message: "Insufficient Balance",
        };
      } else {
        // Amount debited from Balance Account
        await tx.balance.update({
          where: {
            userId: senderId,
          },
          data: {
            amount: {
              decrement: amount,
            },
          },
        }),
          //Amount Credited in Receiver Account
        await tx.balance.updateMany({
            where: {
              userId: Receiver.id,
            },
            data: {
              amount: {
                increment: amount,
              },
            },
          });
        // Creates a Transfer Record.
        const txn = await tx.p2pTransfer.create({
          data: {
            SenderUserId: senderId,
            ReceiverUserId: Receiver.id,
            amount: Number(amount),
            timestamp: new Date(),
          },
        });
        if (txn) {
          return {
            message: "Transfer Successfully Done",
          };
        } else {
          return {
            message: "Transfer Failed",
          };
        }
      }
    });
    return Result || { message: "Unknown Error Occurred" };
  } catch (e) {
    return {
      message: "Transaction Failed",
    };
  }
};
