"use server";
import { Card } from "@moneymingle/ui/card";

export const Transactions = async ({
  transactions,
}: {
  transactions: {
    id:string
    timestamp: Date;
    amount: number;
    SenderUserId: string;
    ReceiverUserId: string;
    Sent:Boolean
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
          <div key={e.timestamp.toString()} className="overflow-y-auto">
            {e.Sent? (
              <div className="flex justify-between p-2 my-2 bg-red-400 rounded">
                <div>
                  <div className="text-sm font-bold">Amount Sent</div>
                  <div className="text-xs text-slate-600">
                    {e.timestamp.toDateString()}
                  </div>
                </div>
                <div className="flex flex-col justify-center text-lg font-bold">
                  - Rs {e.amount / 100}
                </div>
              </div>
            ) : (
              <div className="flex justify-between p-2 my-2 bg-green-400 rounded ">
                <div>
                  <div className="text-sm font-bold">Amount Received</div>
                  <div className="text-xs text-slate-600">
                    {e.timestamp.toDateString()}
                  </div>
                </div>
                <div className="flex flex-col justify-center text-lg font-bold">
                  + Rs {e.amount / 100}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
