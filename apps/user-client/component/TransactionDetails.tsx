"use server";
import { Card } from "@moneymingle/ui/card";

export const Transactions = async ({
  transactions,
}: {
  transactions: {
    id: string;
    timestamp: Date;
    amount: number;
    SenderUserId: string;
    ReceiverUserId: string;
    Sent: Boolean;
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
      <div className="h-56 pt-2 overflow-y-auto">
        {transactions.map((e) => (
          <div key={e.timestamp.toString()} className="">
            {e.Sent ? (
              <div className="flex justify-between p-2 my-2 text-black bg-red-300 rounded">
                <div>
                  <div className="text-base font-bold">Amount Sent</div>
                  <div className="text-base ">{e.timestamp.toDateString()}</div>
                </div>
                <div className="flex flex-col justify-center text-lg font-bold">
                  - Rs {e.amount / 100}
                </div>
              </div>
            ) : (
              <div className="flex justify-between p-2 my-2 text-black bg-green-300 rounded ">
                <div>
                  <div className="text-base font-bold ">Amount Received</div>
                  <div className="text-base">{e.timestamp.toDateString()}</div>
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
