'use client'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertTriangle, DollarSign, LockIcon } from 'lucide-react'
import { handleTransaction } from '@/action/handleTransaction'

export default function Transaction({amount}:{amount:number}) {
  const [bankName, setBankName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =  async(e: React.FormEvent) => {
    e.preventDefault()
    const response = await handleTransaction({amount:amount,bankingName:bankName,password:password})
    if(response){
        alert(response.msg)
        window.close()
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Transfer Approval</CardTitle>
        <CardDescription>Confirm your transaction details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Label htmlFor="amount" className="text-base font-semibold">Amount to Transfer</Label>
          <div className="flex items-center mt-1 text-3xl font-bold text-primary" id="amount" aria-live="polite">
            <DollarSign/>{amount}
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bank-name">Banking Name</Label>
              <Input 
                id="bank-name"
                placeholder="Enter your banking name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <LockIcon className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" size={18} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full" type="submit">Approve Transaction</Button>
      </CardFooter>
    </Card>
  )
}