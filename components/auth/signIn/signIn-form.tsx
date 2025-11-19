/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { signIn } from "@/app/assets"
import { login } from "@/lib/api"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Eye, EyeOff } from "lucide-react"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await login({ email, password });
      toast.success("Login successful!");
      Cookies.set("access_token", res.access, { expires: 7 });
      Cookies.set("refresh_token", res.refresh, { expires: 30 });
      Cookies.set("user", JSON.stringify(res.user), { expires: 7 });
      toast.success("Login successful!");
      setIsLoading(false);
      router.push("/dashboard/todos");
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error(error.message);
      setIsLoading(false);
    }
  };



  return (
    <div className=" min-h-screen max-w-[1680px] mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen  bg-white rounded-lg  ">
        {/* Left Side*/}
        <div className="hidden lg:flex">
          <Image src={signIn} alt="Login Illustration" width={500} height={400} />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-6">
          <div className="w-full max-w-xl space-y-8">

            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#0D224A]">Log in to your account</h1>
              <p className="mt-2 text-[16px] text-gray-600">Start managing your tasks efficiently</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">

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
             <div className="relative w-full">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt- block w-full pr-10" 
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center text-gray-500"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>


              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-950 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <Link href="/auth/change-password" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
