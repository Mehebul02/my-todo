"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // ✅ make sure this exists (shadcn/ui style)
import { Checkbox } from "@radix-ui/react-checkbox"
import Image from "next/image"
import { signIn } from "../../assets"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt", { email, password, rememberMe })
  }

  return (
    <div className="min-h-screen flex items-center justify-between  p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full   overflow-hidden flex ">
        {/* Left Side - Illustration Area */}
        <div>
        <Image src={signIn} alt="Login Illustration" width={500} height={500}/>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-sm">
            {/* Form Header */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2 font">Log in to your account</h1>
              <p className="text-sm text-gray-600">Start managing your tasks efficiently</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

           
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer">
                    Remember me
                  </label>
                </div>
                {/* sfdsd */}
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot your password?
                </a>
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-6">
                Log in
              </Button>
            </form>

            {/* Register Link */}
            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Register now
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
