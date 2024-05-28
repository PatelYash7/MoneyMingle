"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname === href

    return(
        

        <div className={`flex ${selected ? " text-blueMain" : " text-slate-500"} cursor-pointer hover:text-blueMain p-2 pl-8`} onClick={() => {
            router.push(href);
        }}>
        <div className="pr-2 text-lg font-bold">
            {icon}
        </div>
        <div className={`font-bold ${selected ? "text-blueMain" : "text-slate-500"} hover:text-blueMain font-bold text-lg`}>
            {title}
        </div>
        </div>
    )
}