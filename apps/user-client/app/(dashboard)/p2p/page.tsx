import { BalanceCard } from "../../../components/BalanceCard";
import { SendCard } from "../../../components/SendCard";
import { getBalance } from "../transfer/page";
import { Transactions } from "../../../components/TransactionDetails";
import { getTransactionDetails } from "../../lib/actions/transactionDetails";



export default async function () {
    const balance = await getBalance();
    const txn =await getTransactionDetails();
    return (
      <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
          <div>
            <SendCard/>
          </div>
          <div>
            <BalanceCard amount={balance.amount} locked={balance.locked} />
          <div className="pt-4">
            {/* <OnRampTransactions transactions={txn} /> */}
            <Transactions transactions={txn}/>
          </div>
          </div>

        </div>
      </div>
    );
  }