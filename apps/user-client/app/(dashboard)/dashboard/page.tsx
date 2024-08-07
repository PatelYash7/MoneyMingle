import { FindUser } from "../../../component/FindUser";
import { PortfolioCard } from "../../../component/PortfolioCard";
import { getGreeting } from "../../../lib/actions/setGreetings";
import { getBalance } from "../transfer/page";

export default async function () {
  const greet = getGreeting();
  const balance = await getBalance();
  return (
    <>
      <div className="pt-8 text-4xl font-bold text-secondary-foreground">{greet}</div>
      <div className="grid grid-cols-3 gap-4 my-8 max-h-[262px]">
        <div className="grid col-span-2 border rounded-md">
          <PortfolioCard balance={balance.amount} />
        </div>
        <div className="overflow-y-scroll border rounded-md ">
          <FindUser />
        </div>
      </div>
    </>
  );
}
