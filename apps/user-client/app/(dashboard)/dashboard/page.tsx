import { UserDetailsCard } from "../../../components/UserDetailsCard";
import { getUserDetails } from "../../lib/actions/getUserdetails";


export default async function () {
  const User = await getUserDetails();
  return (
    <div className="w-full">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        User Dashboard
      </div>
      <div className="flex h-screen gap-4 ">
        <div>
          <UserDetailsCard user={User} />
        </div>
      </div>
    </div>
  );
}
