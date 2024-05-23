import { HomeIcon, PeerToPeerIcon, TransactionsIcon, TransferIcon } from "../../components/Icons";
import { SidebarItem } from "../../components/SidebarElement";

export default function({children}:{children:React.ReactNode}):JSX.Element{

    return (
        <div className="flex">
        <div className="w-56 min-h-screen mr-4 border-r border-slate-300 pt-28">
            <div>
                <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
                <SidebarItem href={"/transfer"} icon={<TransferIcon />} title="Transfer" />
                <SidebarItem href={"/transactions"} icon={<TransactionsIcon />} title="Transactions" />
                <SidebarItem href={"/p2p"} icon={<PeerToPeerIcon />} title="P2P transfer" />
            </div>
        </div>
            {children}
    </div>
    )
}

