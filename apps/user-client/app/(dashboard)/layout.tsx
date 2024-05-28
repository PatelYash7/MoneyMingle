import {
  HomeIcon,
  PeerToPeerIcon,
  TransactionsIcon,
  TransferIcon,
} from "../../components/Icons";
import { SidebarItem } from "../../components/SidebarElement";

export default function ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex bg-bgMain">
      <div className="w-56 min-h-screen border-r border-slate-300 pt-28">
        <div className="">
          <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
          <SidebarItem
            href={"/transfer"}
            icon={<TransferIcon />}
            title="Transfer"
          />
          <SidebarItem
            href={"/transactions"}
            icon={<TransactionsIcon />}
            title="Transactions"
          />
          <SidebarItem
            href={"/p2p"}
            icon={<PeerToPeerIcon />}
            title="P2P Transfer"
          />
        </div>
      </div>
      <div className="w-screen pl-4 pr-1 m-4">
        {children}

      </div>
    </div>
  );
}
