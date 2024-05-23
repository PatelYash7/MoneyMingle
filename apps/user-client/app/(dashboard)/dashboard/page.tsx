import { getServerSession } from "next-auth";
import { UserDetailsCard } from "../../../components/UserDetailsCard";
import { authOptions } from "../../lib/authoptions/auth";
import db from "@moneymingle/db/client"


const getUserDetails = async ()=>{
    const session = await getServerSession(authOptions);
    const id= await session.user.id;
    const User = await db.user.findFirst({
        where:{
            id:id
        }
    })
    if(!User){
        return {
            id: "",
            email: "",
            name: "",
            number: "",
            password: "",
          }
    }
    return User
}
export default async function(){
    const User = await getUserDetails()
    return <div className="">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            User Dashboard
        </div>
        <div>
            <UserDetailsCard user={User}/>
        </div>
    </div>
}