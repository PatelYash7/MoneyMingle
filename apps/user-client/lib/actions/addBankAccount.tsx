'use server'
import db,{ PrismaTransactionalClient } from "@moneymingle/db/client"
export const addBankAccount = async ({bankingName,password,id}:{bankingName:string,password:string,id:string | undefined})=>{
    try{
        const result =  await db.$transaction(async(tx:PrismaTransactionalClient)=>{
            const BankAccount = await tx.userBank.findFirst({
                where:{
                    bankingName:bankingName,
                    password:password
                }
            })
            if(!BankAccount){
                return {
                    msg:"Bank Account Doesn't Exsist"
                }
            }
            if(!id){
               return {
                msg:"Error while Adding Bank Account"
               } 
            }
            const data = await tx.userBank.update({
                where:{
                    id:BankAccount.id
                },data:{
                    walletId:id
                }
            })
            if(data){
                return {
                    msg:"Bank Account is Added."
                }
            }
        })
        return result
    }catch(e){
        throw new Error("Error While Adding the Bank")
    }
}