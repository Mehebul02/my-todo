"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"


export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt", { email, password, rememberMe })
  }

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden flex h-96">
        {/* Left Side - Illustration Area */}
        <div className="w-1/2 bg-blue-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-blue-200 rounded-lg opacity-40"></div>
          <div className="absolute bottom-12 right-12 w-12 h-12 bg-blue-300 rounded-full opacity-30"></div>

          {/* Illustration Container */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            {/* Potted Plant */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-16 bg-green-500 rounded-b-lg"></div>
              <div className="w-12 h-6 bg-orange-400 rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute top-1 right-3 w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute top-3 left-2 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Phone with User Profile */}
            <div className="w-12 h-20 bg-black rounded-2xl border-2 border-gray-300 flex items-center justify-center shadow-lg">
              <div className="w-10 h-16 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg flex flex-col items-center justify-center p-1 gap-0.5">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-5 h-2 bg-blue-300 rounded"></div>
                <div className="w-4 h-1 bg-blue-200 rounded"></div>
              </div>
            </div>

            {/* Woman Illustration */}
            <div className="w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg flex flex-col items-center justify-center relative">
              <div className="w-6 h-6 bg-yellow-100 rounded-full mb-1"></div>
              <div className="w-8 h-6 bg-blue-600 rounded-sm"></div>
            </div>

            {/* Floating Chat Bubbles */}
            <div className="flex gap-2 opacity-60">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-100 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-sm">
            {/* Form Header */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Log in to your account</h1>
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

              {/* Remember Me & Forgot Password */}
              {/* <div className="flex items-center justify-between pt-2">
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
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot your password?
                </a>
              </div> */}

              {/* Submit Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-6">Log in</Button>
            </form>

            {/* Register Link */}
            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
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
