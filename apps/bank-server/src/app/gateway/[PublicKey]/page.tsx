import Transaction from "@/components/component/transaction";
import jwt, { JwtPayload } from "jsonwebtoken"
export default function Page ({params}:{params:{PublicKey:string}}){
    const data = jwt.decode(params.PublicKey) as JwtPayload ;
    return <div>
       <Transaction amount={data.amount }/>
    </div>
}


