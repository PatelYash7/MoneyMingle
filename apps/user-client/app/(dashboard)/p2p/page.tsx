import { BalanceCard } from "../../../component/BalanceCard";
import { SendCard } from "../../../component/SendCard";
import { getBalance } from "../transfer/page";
import { Transactions } from "../../../component/TransactionDetails";
import { getTransactionDetails } from "../../../lib/actions/transactionDetails";

export default async function () {
  const balance = await getBalance();
  const txn = await getTransactionDetails();
  return (
    <>
      <div className="pt-8 mb-8 text-4xl font-bold text-headMain">Transfer</div>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <div>
          <SendCard />
        </div>
        <div>
          <BalanceCard amount={balance.amount} locked={balance.locked} />
          <div className="pt-4">
            <Transactions transactions={txn} />
          </div>
        </div>
      </div>
    </>
  );
}
