"use server";
import db, { PrismaTransactionalClient } from "@moneymingle/db/client";
import jwt from "jsonwebtoken"
export const handleSignup = async ({
  bankingName,
  password,
  name,
  WalletNumber,
}: {
  bankingName: string;
  password: string;
  name: string;
  WalletNumber: string;
}) => {
  if (bankingName && password && name && WalletNumber) {
    try {
      const Result = await db.$transaction(
        async (tx: PrismaTransactionalClient) => {
          const data = await tx.user.findFirst({
            where: {
              number: WalletNumber,
            },
          });
          if (data?.id) {
           const Data =  await tx.userBank.create({
              data: {
                name: name,
                bankingName: bankingName,
                password: password,
                walletId: data.id,
              },
            });
            // Add Env Here
            const token = await jwt.sign(Data.id,"JaiShreeRam")
            if(token){
                return {
                    token
                }
            }
          }else{
            return {
                msg:"Cannot Find the MoneyMingle Wallet. Please try Again."
            }
          }
        }
      );
      return Result
    } catch (e) {
      throw new Error("Error In Signup");
    }
  } else {
    return {
      msg: "Can't SignUp Please try again with Proper Data.",
    };
  }
};
