import { Card } from "@moneymingle/ui/card";

export const BalanceCard = ({amount, locked}: {
    amount: number;
    locked: number;
}) => {
    return <Card title={"Balance"}>
        <div className="flex justify-between pb-2 border-b border-slate-300">
            <div>
                Unlocked balance
            </div>
            <div>
                {amount} INR
            </div>
        </div>
        <div className="flex justify-between py-2 border-b border-slate-300">
            <div>
                Total Locked Balance
            </div>
            <div>
                {locked} INR
            </div>
        </div>
        <div className="flex justify-between py-2 border-b border-slate-300">
            <div>
                Total Balance
            </div>
            <div>
                {(locked + amount)} INR
            </div>
        </div>
    </Card>
}