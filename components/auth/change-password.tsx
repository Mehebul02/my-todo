/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { signIn } from "@/app/assets"

// Your backend API (replace the URL)
async function changePasswordApi(payload: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/change-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      },
      body: JSON.stringify(payload),
    }
  )

  if (!res.ok) throw new Error("Password change failed")
  return await res.json()
}

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      toast.error("New password & confirmation do not match!")
      return
    }

    setIsLoading(true)

    try {
      await changePasswordApi({
        currentPassword,
        newPassword,
      })

      toast.success("Password updated successfully!")
      router.push("/dashboard")
    } catch (error: any) {
      toast.error(error.message || "Password change failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className=" min-h-screen max-w-[1680px] mx-auto">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen  bg-white rounded-lg  ">

        {/* Left Illustrated Side */}
        <div className="hidden lg:flex w-1/2 justify-center items-center p-10">
          <Image src={signIn} alt="Illustration" width={520} height={450} />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-6">
          <div className="w-full max-w-md space-y-6">

            {/* Title */}
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-[#0D224A]">
                Change Your Password
              </h1>
              <p className="mt-2 text-gray-600">
                Keep your account safe by updating your password.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Current Password */}
              <div className="relative w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <Input
                  type={showCurrent ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="mt-1 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute inset-y-0 right-0 pr-3 mt-6 flex items-center text-gray-500"
                >
                  {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* New Password */}
              <div className="relative w-full">
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <Input
                  type={showNew ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="mt-1 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute inset-y-0 right-0 pr-3 mt-6 flex items-center text-gray-500"
                >
                  {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 pr-3 mt-6 flex items-center text-gray-500"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
              >
                {isLoading ? "Updating..." : "Change Password"}
              </Button>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
