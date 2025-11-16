/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { signUp } from "@/app/assets"
import { signup } from "@/lib/api"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export default function SignUpForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
const Api = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Validation states
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    submit: "",
  })
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  const validateForm = () => {
    const newErrors = {
      firstName: firstName ? "" : "First name is required",
      lastName: lastName ? "" : "Last name is required",
      email: email ? "" : "Email is required",
      password: password.length >= 4 ? "" : "Password must be at least 4 characters",
      confirmPassword: password === confirmPassword ? "" : "Passwords do not match",
      submit: "",
    }
    setErrors(newErrors)
    return Object.values(newErrors).every((err) => err === "")
  }
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors(prev => ({ ...prev, submit: "" })); // Clear previous errors

    try {
      const response = await fetch(
        "https://todo-app.pioneeralpha.com/api/users/signup/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Signup failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log("Signup Success:", data);
      // Show success message or redirect
      toast.success("Signup successful!");
      router.push("/auth/signin");
      

    } catch (err: any) {
      console.error("Signup Failed:", err.message);
      setErrors((prev) => ({ ...prev, submit: err.message }));
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen max-w-[1680px] mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-white rounded-lg">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex">
          <Image src={signUp} alt="Login Illustration" width={500} height={400} />
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
              <div className="flex justify-between items-center gap-4">
                {/* First Name */}
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`mt-1 block w-full ${errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`mt-1 block w-full ${errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Doe"
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
                  placeholder="john.doe@example.com"
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
                  placeholder="••••••••"
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
                  placeholder="••••••••"
                  required
                />
                {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-700 hover:bg-[#5272FF] text-white font-medium py-2 cursor-pointer px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating account..." : "Sign Up"}
              </Button>

              {/* Error Message */}
              {errors.submit && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}
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