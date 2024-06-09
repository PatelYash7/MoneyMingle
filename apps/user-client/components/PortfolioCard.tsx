export const PortfolioCard = ()=>{
    return <div className="px-4 py-2 bg-white rounded-md">
        <div className="text-lg font-bold">
            <div>
                Portfolio
            </div>
            <div className="text-5xl font-semibold text-gray-700 ">
                $0.00
            </div>
        </div>
        <div className="flex items-center justify-center py-8 ">
            <div className="flex gap-4 px-4 py-4 border-r-2 border-gray-950">
                <button>Send</button>
                <button>Receive</button>
                <button>Receive</button>
                <button>Receive</button>
            </div>
            <div className="flex gap-4 px-4 py-4 ">
                <button>Send</button>
                <button>Send</button>
                <button>Send</button>
                <button>Receive</button>
            </div>
        </div>
    </div>
}