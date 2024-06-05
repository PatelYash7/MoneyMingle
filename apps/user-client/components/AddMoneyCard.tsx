"use client";

import { Button } from "@moneymingle/ui/button";
import { Card } from "@moneymingle/ui/card";
import { Select } from "@moneymingle/ui/select";
import { TextInput } from "@moneymingle/ui/textinput";
import { useState } from "react";
import { createOnRampTransctns } from "../app/lib/actions/createOnRampTransctns";

const SUPPORTED_BANKS:{name:string,redirectURL:string}[] = [
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
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectURL
  );
  const [transaction,SetTransaction]= useState({
    amount:0,
    provider:SUPPORTED_BANKS[0]?.name || ""
  })
  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          label={"Amount"}
          placeholder={"Amount"}
          onChange={async (value)=>{
            await SetTransaction({...transaction,amount:parseInt(value)})
          }
        }
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={async (value) => {
            await SetTransaction({...transaction,provider:value})
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
              const res = await createOnRampTransctns(transaction.amount*100,transaction.provider);
              if(!res.status){
              alert(res.message)
              }else{
                window.location.href = redirectUrl ||" " 
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
