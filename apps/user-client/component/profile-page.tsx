'use client'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { addBankAccount } from "../lib/actions/addBankAccount"

export function ProfilePage() {
  const[bankingName,setbankingName]=useState('')
  const[password,setPassword]=useState('')
  const session = useSession();
  const handleSubmit = async()=>{
    const response = await addBankAccount({bankingName:bankingName,password:password,id:session.data?.user.id})
    if(response?.msg){
      alert(response.msg)
    }
  }
  return (
    <div className="container px-4 mx-auto my-8 md:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 555-5555" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" defaultValue="********" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Bank Account Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="bank-name">Bank Name</Label>
                <Input onChange={(e)=>{setbankingName(e.target.value)}} id="bank-name" placeholder="Enter Your Banking Name"/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="routing-number">Enter Your Banking Password</Label>
                <Input id="routing-number" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Your password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} variant="outline">Add Bank Account</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
