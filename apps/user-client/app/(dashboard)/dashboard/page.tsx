import { getGreeting } from "../../lib/actions/setGreetings";

export default async function () {
  const greet = getGreeting();
  return (
    <div className="w-full">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        {greet}
      </div>
    </div>
  );
}
