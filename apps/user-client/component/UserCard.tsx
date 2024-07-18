import { User } from "../types/User";

export const UserCard = ({ friends }: { friends: User }) => {
  return (
    <div className="flex items-center justify-between px-2 py-1 text-white rounded-md bg-blueMain">
      <div>
        <div className="font-serif text-xl font-bold">{friends.name}</div>
        <div className="text-lg ">{friends.number}</div>
      </div>
      <div className="px-4 py-1 bg-purple-400 rounded-md ">
        <button>Send</button>
      </div>
    </div>
  );
};
