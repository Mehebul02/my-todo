"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Checkbox } from "@radix-ui/react-checkbox"
import Image from "next/image"
import Link from "next/link"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt", { email, password, rememberMe })
    // Add actual login logic here
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Illustration Area */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-blue-50 p-8">
        <div className="max-w-md w-full">
          <Image
            src={signInImage}
            alt="Login illustration"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority // Optional: if this is above the fold
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Form Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Log in to your account</h1>
            <p className="mt-2 text-sm text-gray-600">Start managing your tasks efficiently</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Log in
            </Button>
          </form>

          {/* Register Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}