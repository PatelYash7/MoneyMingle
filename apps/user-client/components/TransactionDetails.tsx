"use server";
import { Card } from "@moneymingle/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/authoptions/auth";

export const Transactions = async ({
  transactions,
}: {
  transactions: {
    time: Date;
    Amount: number;
    SenderID: string;
    ReceiverID: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="pt-8 pb-8 text-center">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((e) => (
          <div key={e.time.toString()} className="overflow-y-auto">
            {/* Check for transaction is required + -  */}
            {true? (
              <div className="flex justify-between p-2 my-2 bg-red-400 rounded">
                <div>
                  <div className="text-sm font-bold">Amount Sent</div>
                  <div className="text-xs text-slate-600">
                    {e.time.toDateString()}
                  </div>
                </div>
                <div className="flex flex-col justify-center text-lg font-bold">
                  - Rs {e.Amount / 100}
                </div>
              </div>
            ) : (
              <div className="flex justify-between p-2 my-2 bg-green-400 rounded ">
                <div>
                  <div className="text-sm">Amount Received</div>
                  <div className="text-xs text-slate-600">
                    {e.time.toDateString()}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  + Rs {e.Amount / 100}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* {transactions.map(t => <div key={Math.random()*10} className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-xs text-slate-600">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.Amount / 100}
                </div>

            </div>)} */}
      </div>
    </Card>
  );
};
