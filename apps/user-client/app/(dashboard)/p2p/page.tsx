import { getServerSession } from "next-auth";
import { BalanceCard } from "../../../components/BalanceCard";
import { SendCard } from "../../../components/SendCard";
import { getBalance } from "../transfer/page";
import db from "@moneymingle/db/client"
import { authOptions } from "../../lib/authoptions/auth";
import { OnRampTransactions } from "../../../components/OnRampTransaction";
import { Transactions } from "../../../components/TransactionDetails";

export const getP2PTransfer = async ()=>{
    const session = await getServerSession(authOptions);
    const userId = await session.user.id;
    const txns = await db.p2pTransfer.findMany({
        where:{
            SenderUserId:userId
        }
    })
    return txns.map((t)=>({
        time:t.timestamp,
        SenderID:t.SenderUserId,
        ReceiverID:t.ReceiverUserId,
        Amount:t.amount
    }))
}


export default async function () {
    const balance = await getBalance();
    const txn =await getP2PTransfer();
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
          </div>
          <div className="pt-4">
            {/* <OnRampTransactions transactions={txn} /> */}
            <Transactions transactions={txn}/>
          </div>

        </div>
      </div>
    );
  }