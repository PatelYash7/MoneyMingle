import { HomeIcon, TransactionsIcon, TransferIcon } from "../../components/Icons";
import { SidebarItem } from "../../components/SidebarElement";

export default function({children}:{children:React.ReactNode}):JSX.Element{

    return (
        <div className="flex">
        <div className="min-h-screen mr-4 border-r w-72 border-slate-300 pt-28">
            <div>
                <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
                <SidebarItem href={"/transfer"} icon={<TransferIcon />} title="Transfer" />
                <SidebarItem href={"/transactions"} icon={<TransactionsIcon />} title="Transactions" />
            </div>
        </div>
            {children}
    </div>
    )
}

