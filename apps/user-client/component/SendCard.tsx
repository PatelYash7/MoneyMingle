"use client";

import { Button } from "@moneymingle/ui/button";
import { Card } from "@moneymingle/ui/card";
import { TextInput } from "@moneymingle/ui/textinput";
import { useState } from "react";
import { User } from "../types/User";
import { mobileVerification } from "../lib/actions/mobileVerification";
import { p2pTransfer } from "../lib/actions/p2pTransfer";

export function SendCard() {
  const[response,SetResponse]=useState("")
  const [TransactionCall, SetTransactionCall] = useState({
    number: "",
    amount: "",
  });
  const [verifiedUser, setVerifiedUser] = useState<User>();
  const ClearInput = () => {
    SetTransactionCall({
      number: "",
      amount: "",
    });
  };
  return (
    <Card title="Send">
      <div className="pt-2 min-w-72">
        <TextInput
          placeholder={"Number"}
          label="Number"
          value={TransactionCall.number}
          onChange={(value) => {
            SetTransactionCall({
              ...TransactionCall,
              number: value,
            });
          }}
          readonly={verifiedUser?.id ? true : false}
        />
        <div className="p-1 mb-2 text-sm max-w-fit">
          {verifiedUser?.id ? (
            <div className="flex gap-2">
              <div className="px-2 font-bold border rounded cursor-default w-fit">
                Verified
              </div>
              {/* Not working */}
              <div
                onClick={() => {
                  setVerifiedUser({
                    id: "",
                    name: "",
                    email: "",
                    number: "",
                    password: "",
                  });
                  ClearInput();
                }}
                className="px-2 font-bold border rounded cursor-pointer"
              >
                change details
              </div>
            </div>
          ) : (
            <div
              onClick={async () => {
                const bool = await mobileVerification(TransactionCall.number);
                await setVerifiedUser(bool);
              }}
              className="font-semibold cursor-pointer"
            >
              Verify User
            </div>
          )}
        </div>
        <TextInput
          placeholder={"Amount"}
          label="Amount"
          value={TransactionCall.amount}
          onChange={(value) => {
            SetTransactionCall({
              ...TransactionCall,
              amount: value,
            });
          }}
        />
        <div className="pt-4 ">
          {verifiedUser?.id ? (
            <div className="flex flex-col gap-2">
              <div className="px-2 border-2 border-gray-400">
                <div className="flex gap-2 font-bold border-b-2 border-gray-400">
                  Username:
                  <div className="font-semibold">{verifiedUser.name}</div>
                </div>
                <div className="flex gap-2 font-bold">
                  User ID:
                  <div className="font-semibold">
                    {"xxxx" +
                      verifiedUser.id
                        .toLowerCase()
                        .substring(verifiedUser.id.length - 4)}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  onClick={async () => {
                    const Response = await p2pTransfer(
                      TransactionCall.number,
                      Number(TransactionCall.amount) * 100
                    );
                    if(Response){
                      alert(Response.message)
                      window.location.reload()
                    }
                    await setVerifiedUser({
                      id: "",
                      email: "",
                      name: "",
                      number: "",
                      password: "",
                    });
                    await ClearInput();
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div>Verify the User before Sending the money</div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
