"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../authoptions/auth";
import db from "@moneymingle/db/client";

export const getTransactionDetails = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const sentTransactions = await db.p2pTransfer.findMany({
    where: {
      SenderUserId: userId,
    },
  });
  const sentTransactionsUpdated = sentTransactions.map((e) => {
    return {
      ...e,
      Sent: true,
    };
  });

  const receivedTransactions = await db.p2pTransfer.findMany({
    where: {
      ReceiverUserId: userId,
    },
  });
  const receivedTransactionsUpdated = receivedTransactions.map((e) => {
    return {
      ...e,
      Sent: false,
    };
  });
  const allTransaction = sentTransactionsUpdated.concat(
    receivedTransactionsUpdated,
  );
  allTransaction.sort((a, b) => {
    const DateA = new Date(a.timestamp).getTime();
    const DateB = new Date(b.timestamp).getTime();
    return DateA - DateB;
  });
  return allTransaction;
};
