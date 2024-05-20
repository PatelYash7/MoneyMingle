"use client"

import { Button } from "@moneymingle/ui/button";
import { Card } from "@moneymingle/ui/card";
import { Center } from "@moneymingle/ui/center";
import { TextInput } from "@moneymingle/ui/textinput";
import { useState } from "react";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <Card title="Send" bg=" bg-purple-200">
                <div className="pt-2 min-w-72">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="flex justify-center pt-4">
                        <Button onClick={() => {

                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        

}