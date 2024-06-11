'use client'
import { useRouter } from "next/navigation"

export const PortfolioCard = ()=>{
    const router = useRouter()
    return <div className="px-4 py-2 bg-white rounded-lg">
        <div className="text-lg font-bold">
            <div>
                Portfolio
            </div>
            <div className="text-5xl font-bold text-gray-700 ">
                $0.00
            </div>
        </div>
        <div className="flex items-center justify-center py-4 my-8 border-t-2">
            <div className="flex gap-4 px-4 py-4 ">
                <button onClick={()=>{router.replace('/p2p')}} className="px-4 py-2 font-bold text-black bg-green-400 rounded-xl">Send</button>
                <button  className="px-4 py-2 font-bold text-black bg-red-400 rounded-xl">Receive</button>
                <button  className="px-4 py-2 font-bold text-black bg-blue-400 rounded-xl">Deposit</button>
                <button  className="px-4 py-2 font-bold text-black bg-gray-400 rounded-xl">Debit</button>
            </div>
        </div>
    </div>
}