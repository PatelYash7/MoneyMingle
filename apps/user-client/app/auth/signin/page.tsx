"use client";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../component/ui/card";
import { Label } from "../../../component/ui/label";
import { Input } from "../../../component/ui/input";
import { Button } from "../../../component/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [error, setError] = useState("");
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background text-foreground">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign in to MoneyMingle
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <div className="relative">
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute transform -translate-y-1/2 right-3 top-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input
              onChange={(e) => {
                setphone(e.target.value);
              }}
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {error && <div className="text-red-600">{error}</div>}
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            onClick={async (e) => {
                e.preventDefault()
              console.log("Hello");
              console.log(phone);
              console.log(password);
              console.log(email);
              if (phone && password && email) {
                const res = await signIn("credentials", {
                  phone: phone,
                  password: password,
                  email: email,
                  redirect:false
                });
                console.log(res);
                if (res?.ok) {
                  router.push("/dashboard");
                //   window.location.replace("/dashboard");
                } else {
                  setError("Invalid email or password. Please try again.");
                }
              }
            }}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
