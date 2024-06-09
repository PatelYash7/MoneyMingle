import { PortfolioCard } from "../../../components/PortfolioCard";
import { getGreeting } from "../../lib/actions/setGreetings";

export default async function () {
  const greet = getGreeting();
  return (
    <>
      <div className="pt-8 text-4xl font-bold text-blueMain">{greet}</div>
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="grid col-span-2">
          <PortfolioCard/>
        </div>
        <div className="bg-green-200">jaihind</div>
      </div>
    </>
  );
}
