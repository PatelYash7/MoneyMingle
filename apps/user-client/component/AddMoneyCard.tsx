"use client";
import { Button } from "@moneymingle/ui/button";
import { Card } from "@moneymingle/ui/card";
import { Select } from "@moneymingle/ui/select";
import { TextInput } from "@moneymingle/ui/textinput";
import { useState } from "react";
import { createOnRampTransctns } from "../lib/actions/createOnRampTransctns";
import { useSession } from "next-auth/react";
import { handleDepositTransaction } from "../lib/actions/handleDepositTransaction";
import { OnRampTransactions } from "./OnRampTransaction";

const SUPPORTED_BANKS = [
  {
    name: "HDFC BANK",
    redirectURL: "https://netbanking.hdfcbank.com/",
  },
  {
    name: "Axis Bank",
    redirectURL: "https://www.axisbank.com/",
  },
];

export const AddMoneyCard = () => {
  const session = useSession()
  const [provider,setProvider]=useState("HDFC BANK")
  const [amount,setAmount] = useState<number>(0)
  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          label={"Amount"}
          placeholder={"Amount"}
          onChange={async (value) => {
             setAmount(Number(value))
          }}
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={async (value) => {
            setProvider(value)
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4 border-white">
          <Button
            onClick={async () => {
              const response  = await createOnRampTransctns(amount,provider);
              const token = await handleDepositTransaction({amount,provider,id:session.data?.user.id})
              if(token && response){
                window.open(`http://localhost:3004/gateway/${token}`, '_blank','noopener,noreferrer,width=800,height=600'); 
              }
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
