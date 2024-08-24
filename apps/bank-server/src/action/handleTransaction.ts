'use server'
import db, { PrismaTransactionalClient } from "@moneymingle/db/client"

export const handleTransaction = async ({amount,bankingName,password}:{amount:number,bankingName:string,password:string})=>{
    try{
        const result = db.$transaction(async(tx:PrismaTransactionalClient)=>{
            const findAccount = await tx.userBank.findFirst({
                where:{
                    bankingName:bankingName,
                    password:password
                }
            })
            if(findAccount){
                const UserBalanceAccount = await tx.balance.findFirst({
                    where:{
                        userId:findAccount.walletId as string
                    }
                })
                if(UserBalanceAccount){
                    const UpdateUserBank = await tx.userBank.update({
                        where:{
                            id:findAccount.id
                        },
                        data:{
                            Amount:{
                                decrement:amount*100
                            }
                        }
                    })
                    const data = await tx.balance.update({
                        where:{
                            id:UserBalanceAccount.id
                        },
                        data:{
                            amount:{
                                increment:amount*100,
                            },
                            locked:{
                                decrement:amount*100
                            }
                        }
                    })
                    const transaction = await tx.onRampTransaction.findFirst({
                        where:{
                            userId:UserBalanceAccount.userId
                        }
                    })
                    const response = await tx.onRampTransaction.update({
                        where:{
                            id:transaction?.id as string
                        },data:{
                            status:'SUCCESS'
                        }
                    })
                    if(data && response){
                        return{
                            msg:"Transaction Successfull"
                        }
                    }
                }
                return{
                    msg:"Transaction Failed"
                }
            }
        })
        return result
    }catch(e){
        console.log(e)
    }
}