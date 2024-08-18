import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"

export function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-black text-primary-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-muted-foreground">
            Or{" "}
            <Link href="/signup" className="font-medium text-primary hover:text-primary/80" prefetch={false}>
              sign up for a new account
            </Link>
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Toggle id="remember-me" name="remember-me" defaultChecked aria-label="Remember me">
                Remember me
              </Toggle>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-primary hover:text-primary/80" prefetch={false}>
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
