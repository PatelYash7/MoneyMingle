"use server";
import db, { PrismaTransactionalClient } from "@moneymingle/db/client";
import jwt from "jsonwebtoken";

export const handleSignin = async ({
  bankingName,
  password,
}: {
  bankingName: string;
  password: string;
}) => {
  if (bankingName && password) {
    try {
      const Result = await db.$transaction(
        async (tx: PrismaTransactionalClient) => {
          const User = await tx.userBank.findFirst({
            where: {
              bankingName: bankingName,
              password: password,
            },
          });

          if (!User) {
            return {
              msg: "Invalid bankingName or password or please Create an account.",
              // token: null,
            };
          }

          // Add Env Here
          const token = await jwt.sign(User.id, "JaiShreeRam");

          if (token) {
            return {
              msg: "Signin successful.",
              token,
            };
          }
        }
      );
      return Result;
    } catch (e) {
      throw new Error("Error in Signin");
    }
  } else {
    return {
      msg: "Please provide both bankingName and password.",
    };
  }
};
