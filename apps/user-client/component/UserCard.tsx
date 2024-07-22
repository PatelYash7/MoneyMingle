import { User } from "../types/User";

export const UserCard = ({ friends }: { friends: User }) => {
  return (
    <div className="flex items-center justify-between px-2 py-1 text-black bg-teal-300 rounded bg-blueMain">
      <div>
        <div className="text-xl font-bold ">{friends.name}</div>
        <div className="text-lg ">{friends.number}</div>
      </div>
      <div className="px-4 py-1 bg-blue-600 rounded ">
        <button>Send</button>
      </div>
    </div>
  );
};
