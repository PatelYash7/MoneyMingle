import { getServerSession } from "next-auth";
import { AppbarClient } from "../../component/AppbarClient";
import {
  HomeIcon,
  PeerToPeerIcon,
  TransactionsIcon,
  TransferIcon,
} from "../../component/Icons";
import { SidebarItem } from "../../component/SidebarElement";
import { authOptions } from "../../lib/authoptions/auth";

export default async function ({
  children,
}: {
  children: React.ReactNode;
}){
  const session =await getServerSession(authOptions);
  return (
    <div>
      <AppbarClient name={session.user.name} />
      <div className="flex bg-bgMain ">
        <div className="min-h-[calc(100vh-60.8px)] border-r border-slate-300">
          <div className="pl-16 pr-4 mt-28">
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
        <div className="w-screen py-4 pl-4 pr-16">{children}</div>
      </div>
    </div>
  );
}
