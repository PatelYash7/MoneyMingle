"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../authoptions/auth"
import db from "@moneymingle/db/client"


export async function createOnRampTransctns(amount:number,provider:string){
    const session = await getServerSession(authOptions);
    // Token Feature to be implemented which comes from the banking server
    const token = Math.random().toString()
    const userId = session.user.id;

    if(!userId || amount == 0){
        return {
            message:"Failure",
            status:false
        }
    }
    await db.onRampTransaction.create({
        data:{
            userId,
            amount:amount,
            status:"PROCESSING",
            startTime: new Date(),
            provider,
            token
        }
    })
    await db.balance.update({
        where:{
            userId:userId,
        },
        data:{
            locked:amount
        }
    })
        
            
    return {
        message:"On ramp transaction Added",
        status:true
    }
}