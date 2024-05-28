import { getGreeting } from "../../lib/actions/setGreetings";

export default async function () {
  const greet = getGreeting();
  return (
    <>
      <div className="pt-8 mb-6 text-4xl font-bold text-blueMain">{greet}</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid col-span-2 bg-red-200 ">Hello</div>
        <div className="bg-green-200">jaihind</div>
      </div>
    </>
  );
}
