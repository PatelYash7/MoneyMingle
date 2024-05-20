"use client"

import { Button } from "@moneymingle/ui/button";
import { Card } from "@moneymingle/ui/card";
import { TextInput } from "@moneymingle/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const[number,SetNumber]= useState("")
    const[amount,SetAmount]= useState("")

    return <Card title="Send" bg=" bg-purple-200">
                <div className="pt-2 min-w-72">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        SetNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        SetAmount(value)
                    }} />
                    <div className="flex justify-center pt-4">
                        <Button onClick={async () => {
                            await p2pTransfer(number,Number(amount)*100)
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        

}