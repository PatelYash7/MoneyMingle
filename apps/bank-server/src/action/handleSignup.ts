"use server";
import db, { PrismaTransactionalClient } from "@moneymingle/db/client";
import jwt from "jsonwebtoken";
export const handleSignup = async ({
  bankingName,
  password,
  name,
}: {
  bankingName: string;
  password: string;
  name: string;
}) => {
  if (bankingName && password && name ) {
    try {
      const Result = await db.$transaction(
        async (tx: PrismaTransactionalClient) => {
          const User = await tx.userBank.findFirst({
            where:{
              bankingName:bankingName
            }
          })
          if(User){
            return {
              msg:"User Already Exsist.Please signin.",
              // token:null
            }
          }
          const Data = await tx.userBank.create({
            data: {
              name: name,
              bankingName: bankingName,
              password: password,
            },
          });
          // Add Env Here
          const token = await jwt.sign(Data.id, "JaiShreeRam");
          if (token) {
            return {
              msg:'Bank Account Created.',
              token,
            };
          }
        }
      );
      return Result;
    } catch (e) {
      throw new Error("Error In Signup");
    }
  } else {
    return {
      msg: "Can't SignUp Please try again with Proper Data.",
    };
  }
};
