"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { signUp } from "@/app/assets"


export default function SignUpForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  // Validation states (optional - for demo)
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const validateForm = () => {
    const newErrors = {
      firstName: firstName ? "" : "First name is required",
      lastName: lastName ? "" : "Last name is required",
      email: email ? "" : "Email is required",
      password: password.length >= 4 ? "" : "Password must be at least 4 characters",
      confirmPassword: password === confirmPassword ? "" : "Passwords do not match",
    }
    setErrors(newErrors)
    return Object.values(newErrors).every((err) => err === "")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Sign Up attempt", { firstName, lastName, email, password, rememberMe })
      // Here you can call your API or redirect
    }
  }

  return (
    <div className="min-h-screen max-w-[1680px] mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-white rounded-lg">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex p-8">
          <Image
            src={signUp}
            alt="Sign Up Illustration"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Form Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#0D224A]">Create your account</h1>
              <p className="mt-2 text-sm text-gray-600">Start managing your tasks efficiently</p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-between items-center">
                {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`mt-1 block w-full ${errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="name.Platform"
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`mt-1 block w-full ${errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="name.Platform"
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
              </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full ${errors.email ? 'border-red-500' : ''}`}
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full ${errors.password ? 'border-red-500' : ''}`}
                  required
                />
                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                {password && password.length < 4 && (
                  <p className="mt-1 text-xs text-yellow-600">4 characters minimum.</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`mt-1 block w-full ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  required
                />
                {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
              </div>

            

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-[#5272FF]  text-white font-medium py-2 cursor-pointer px-4 rounded-md transition-colors duration-200"
              >
                Sign Up
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}