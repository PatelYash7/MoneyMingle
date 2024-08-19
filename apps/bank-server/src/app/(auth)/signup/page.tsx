"use client";
import { handleSignup } from "@/action/handleSignup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [Bname, setBname] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await handleSignup({
        bankingName: Bname,
        password: password,
        name: Name,
      });
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
    <div>
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-black">
              Create an Account for MoneyMingle Finances Bank
            </h2>
            <p className="mt-2 text-sm text-center text-muted-foreground">
              Or{" "}
              <Link
                href="/signin"
                className="font-medium text-primary hover:text-primary/80"
                prefetch={false}
              >
                sign in to Exsisting Account
              </Link>
            </p>
          </div>
          <div>
            <Label className="space-y-4 text-lg font-bold">Banking Name</Label>
            <Input
              onChange={(e) => {
                setBname(e.target.value);
              }}
              id="bName"
              name="bName"
              type="bName"
              autoComplete="bName"
              required
              placeholder="Enter Your Unique Banking Name."
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <Label className="space-y-4 text-lg font-bold text-black ">
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
              placeholder="Enter A Strong Password"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <Label className="space-y-4 text-lg font-bold text-black ">
              Name
            </Label>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              name="name"
              type="name"
              required
              placeholder="Enter Your Name"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <Button type="submit" onClick={handleSubmit} className="w-full">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
