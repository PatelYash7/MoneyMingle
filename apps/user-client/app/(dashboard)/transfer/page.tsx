import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authoptions/auth";
import prisma from "@moneymingle/db/client";
import { AddMoneyCard } from "../../../component/AddMoneyCard";
import { BalanceCard } from "../../../component/BalanceCard";
import { OnRampTransactions } from "../../../component/OnRampTransaction";

export async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: session?.user?.id,
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}
async function getOnRampTransaction() {
  const session = await getServerSession(authOptions);
  const txn = await prisma.onRampTransaction.findMany({
    where: {
      userId: session?.user?.id,
    },
  });
  return txn.map((t: any) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function () {
  const balance = await getBalance();
  const transactions = await getOnRampTransaction();
  return (
    <>
      <div className="pt-8 mb-8 text-4xl font-bold text-headMain">Transfer</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <AddMoneyCard />
        </div>
        <div>
          <BalanceCard amount={balance.amount} locked={balance.locked} />
          <div className="pt-4">
            <OnRampTransactions transactions={transactions} />
          </div>
        </div>
      </div>
    </>
  );
}
