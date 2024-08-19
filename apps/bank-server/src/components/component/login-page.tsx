"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { handleSignin } from "@/action/handleSignin";
import { useRouter } from "next/navigation";

export function LoginPage() {
  const [bankingName, setBankingName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  const handleSubmit = async () => {
    try {
      const response = await handleSignin({bankingName:bankingName,password:password});
      if(response?.token){
        localStorage.setItem('token',response.token)
        router.push("/");
      }
      alert(response?.msg);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-muted-foreground">
            Or{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:text-primary/80"
              prefetch={false}
            >
              sign up for a new account
            </Link>
          </p>
        </div>

        <div>
          <Label className="py-2 text-xl font-bold">
            Enter Your BankingName
          </Label>
          <Input
            onChange={(e) => {
              setBankingName(e.target.value);
            }}
            id="BankingName"
            name="BankingName"
            type="BankingName"
            required
            placeholder="Enter Your Unique Banking Name"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          />
        </div>
        <div>
          <Label htmlFor="password" className="py-2 text-xl font-bold">
            Password
          </Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          />
        </div>
        <div>
          <Button onClick={handleSubmit} className="w-full">Sign in</Button>
        </div>
      </div>
    </div>
  );
}
