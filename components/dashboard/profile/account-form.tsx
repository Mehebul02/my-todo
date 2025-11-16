/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'

// import { useState, useRef } from 'react'
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { CardHeader, CardTitle } from '@/components/ui/card'
// import { Camera } from 'lucide-react'
// import { getMe } from '@/lib/api'

// export default function AccountForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     contact: '',
//     birthday: ''
//   })
 

//   const [profileImage, setProfileImage] = useState<string | null>(null)
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setProfileImage(reader.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const triggerFileInput = () => {
//     fileInputRef.current?.click()
//   }

//   const handleSave = () => {
//     console.log('Saving:', { ...formData, profileImage })
//   }

//   const handleCancel = () => {
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       address: '',
//       contact: '',
//       birthday: ''
//     })
//     setProfileImage(null)
//   }

//   return (
//     <div className="w-full flex justify-center items-start py-10">
//       <div className="bg-white max-w-3xl w-full shadow rounded-lg p-6">
//         <CardHeader>
//           <CardTitle>Account Information</CardTitle>
//         </CardHeader>
//         <div className="space-y-6">
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Avatar className="w-24 h-24 border-2 border-border">
//                 <AvatarImage src={profileImage || "https://i.pravatar.cc/150?img=12"} alt="Profile" />
//                 <AvatarFallback>U</AvatarFallback>
//               </Avatar>
//               <button
//                 onClick={triggerFileInput}
//                 className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
//                 aria-label="Upload profile picture"
//               >
//                 <Camera size={16} />
//               </button>
//             </div>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//               aria-label="File input for profile picture"
//             />
//             <Button 
//               onClick={triggerFileInput}
//               className="bg-[#5272FF] hover:bg-[#5272FF]/90 text-white cursor-pointer"
//             >
//               Upload New Photo
//             </Button>
//           </div>

//           {/* Form Grid */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="firstName" className="text-sm font-medium">
//                 First Name
//               </Label>
//               <Input
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="Enter first name"
//                 className="w-full"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="lastName" className="text-sm font-medium">
//                 Last Name
//               </Label>
//               <Input
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Enter last name"
//                 className="w-full"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-sm font-medium">
//               Email
//             </Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter email address"
//               className="w-full"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="address" className="text-sm font-medium">
//                 Address
//               </Label>
//               <Input
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Enter address"
//                 className="w-full"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="contact" className="text-sm font-medium">
//                 Contact Number
//               </Label>
//               <Input
//                 id="contact"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter contact number"
//                 className="w-full"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="birthday" className="text-sm font-medium">
//               Birthday
//             </Label>
//             <Input
//               id="birthday"
//               name="birthday"
//               type="date"
//               value={formData.birthday}
//               onChange={handleChange}
//               className="w-full"
//             />
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 pt-6">
//             <Button
//               onClick={handleSave}
//               className="flex-1 bg-[#5272FF] hover:bg-[#5272F0]/90 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
//             >
//               Save Changes
//             </Button>
//             <Button
//               onClick={handleCancel}
//               variant="outline"
//               className="flex-1 cursor-pointer"
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { CardHeader, CardTitle } from '@/components/ui/card'
// import { Camera } from 'lucide-react'
// import { getMe } from '@/lib/api'
// import Cookies from "js-cookie";


// export default function AccountForm() {
//   // State: loading & error
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   // Form state — now typed
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     contact: '',
//     birthday: ''
//   })

//   const [profileImage, setProfileImage] = useState<string | null>(null)
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//       const token = Cookies.get("access_token");
//         if (!token) throw new Error('No access token')
//         const res = await getMe(token)
//         const user = (res as any).user ?? (res as any)
//         setFormData({
//           firstName: user.first_name || '',
//           lastName: user.last_name || '',
//           email: user.email || '',
//           address: user.address || '',
//           contact: user.contact_number || '',
//           birthday: user.birthday ? user.birthday.split('T')[0] : ''
//         })

//         setProfileImage(user.profile_image || null)
//       } catch (err) {
//         console.error('Failed to fetch user:', err)
//         setError('Failed to load account info.')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchUser()
//   }, [])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setProfileImage(reader.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const triggerFileInput = () => {
//     fileInputRef.current?.click()
//   }

//   const handleSave = () => {
//     console.log('Saving:', { ...formData, profileImage })
//     // TODO: Call update API
//   }

//   const handleCancel = () => {
//     window.location.reload() 
//   }

//   // 🟠 While loading
//   if (loading) {
//     return (
//       <div className="w-full flex justify-center items-start py-10">
//         <div className="max-w-3xl w-full bg-white shadow rounded-lg p-6">
//           <CardHeader>
//             <CardTitle>Loading Account Info...</CardTitle>
//           </CardHeader>
//           <div className="animate-pulse space-y-4">
//             <div className="h-8 bg-gray-200 rounded w-1/3"></div>
//             <div className="h-40 bg-gray-100 rounded"></div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // 🔴 On error
//   if (error) {
//     return (
//       <div className="w-full flex justify-center py-10">
//         <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg max-w-2xl">
//           {error}
//         </div>
//       </div>
//     )
//   }

//   // ✅ Render form
//   return (
//     <div className="w-full flex justify-center items-start py-10">
//       <div className="bg-white max-w-3xl w-full shadow rounded-lg p-6">
//         <CardHeader>
//           <CardTitle>Account Information</CardTitle>
//         </CardHeader>
//         <div className="space-y-6">
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <div className="relative">
//               <Avatar className="w-24 h-24 border-2 border-border">
//                 <AvatarImage 
//                   src={profileImage || "https://i.pravatar.cc/150?img=12"} 
//                   alt="Profile" 
//                 />
//                 <AvatarFallback>U</AvatarFallback>
//               </Avatar>
//               <button
//                 onClick={triggerFileInput}
//                 className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors shadow-sm"
//                 aria-label="Upload profile picture"
//               >
//                 <Camera size={16} />
//               </button>
//             </div>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//               aria-label="File input for profile picture"
//             />
//             <Button 
//               onClick={triggerFileInput}
//               className="bg-[#5272FF] hover:bg-[#5272FF]/90 text-white"
//             >
//               Upload New Photo
//             </Button>
//           </div>

//           {/* Form Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="firstName" className="text-sm font-medium">
//                 First Name
//               </Label>
//               <Input
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="Enter first name"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="lastName" className="text-sm font-medium">
//                 Last Name
//               </Label>
//               <Input
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Enter last name"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-sm font-medium">
//               Email
//             </Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter email address"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="address" className="text-sm font-medium">
//                 Address
//               </Label>
//               <Input
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Enter address"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="contact" className="text-sm font-medium">
//                 Contact Number
//               </Label>
//               <Input
//                 id="contact"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter contact number"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="birthday" className="text-sm font-medium">
//               Birthday
//             </Label>
//             <Input
//               id="birthday"
//               name="birthday"
//               type="date"
//               value={formData.birthday}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-6">
//             <Button
//               onClick={handleSave}
//               className="flex-1 bg-[#5272FF] hover:bg-[#5272F0]/90 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               Save Changes
//             </Button>
//             <Button
//               onClick={handleCancel}
//               variant="outline"
//               className="flex-1"
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'

import { useState, useEffect, useRef } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { Camera } from 'lucide-react'
import { getMe, profileUpdate } from '@/lib/api'
import Cookies from "js-cookie";
import { toast } from 'sonner'

export default function AccountForm() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    contact: '',
    birthday: ''
  })

  const [profileImage, setProfileImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
const token = Cookies.get("access_token");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("access_token")
        if (!token) throw new Error('No access token')

        const res = await getMe(token)
        const user = (res as any).user ?? (res as any)

        setFormData({
          firstName: user.first_name || '',
          lastName: user.last_name || '',
          email: user.email || '',
          address: user.address || '',
          contact: user.contact_number || '',
          birthday: user.birthday ? user.birthday.split('T')[0] : ''
        })

        setProfileImage(user.profile_image || null)
      } catch (err) {
        console.error('Failed to fetch user:', err)
        setError('Failed to load account info.')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // ⬅️ UPDATED: PATCH API call
// const handleSave = async () => {
  
//   if (!token) return alert("No access token");

//   const formDataToSend = new FormData();
//   formDataToSend.append("first_name", formData.firstName);
//   formDataToSend.append("last_name", formData.lastName);
//   formDataToSend.append("email", formData.email);
//   formDataToSend.append("password", ""); // optional
//   formDataToSend.append("contact_number", formData.contact);
//   formDataToSend.append("address", formData.address);
//   formDataToSend.append("birthday", formData.birthday ? formData.birthday : "");
//   formDataToSend.append("bio", "");

//   // Append profile image file if exists
//   const fileInput = fileInputRef.current;
//   if (fileInput?.files?.[0]) {
//     formDataToSend.append("profile_image", fileInput.files[0]);
//   }

//   try {
//     // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me/`, {
//     //   method: "PATCH",
//     //   headers: {
//     //     Authorization: `Bearer ${token}`,
//     //     // Do NOT set Content-Type manually! Browser will set to multipart/form-data
//     //   },
//     //   body: formDataToSend,
//     // });

//     const res = await profileUpdate({access:token, body:formDataToSend});

//     if (!res.ok) throw new Error(await res.text());

//     const updatedUser = await res.json();
//     console.log("Profile updated:", updatedUser);
//     alert("Profile Updated Successfully!");
//   } catch (err) {
//     console.error("Update error:", err);
//     alert("Failed to update profile");
//   }
// };

const handleSave = async () => {
  const token = Cookies.get("access_token");
  if (!token) return alert("No access token");
  const formDataToSend = new FormData();
  formDataToSend.append("first_name", formData.firstName);
  formDataToSend.append("last_name", formData.lastName);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("password", ""); 
  formDataToSend.append("contact_number", formData.contact);
  formDataToSend.append("address", formData.address);
  formDataToSend.append("birthday", formData.birthday || "");
  formDataToSend.append("bio", "");
  
  if (fileInputRef.current?.files?.[0]) {
    formDataToSend.append("profile_image", fileInputRef.current.files[0]);
  }
  try {
    const updatedUser = await profileUpdate(token, formDataToSend);
    console.log("Profile updated:", updatedUser);
    toast.success("Profile Updated Successfully!");
  } catch (err) {
    console.error("Update error:", err);
    toast.error("Failed to update profile");
  }
};


  const handleCancel = () => window.location.reload()

  if (loading) {
    return (
      <div className="w-full flex justify-center items-start py-10">
        <div className="max-w-4xl w-full bg-white shadow rounded-lg p-6">
          <CardHeader>
            <CardTitle>Loading Account Info...</CardTitle>
          </CardHeader>
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-40 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full flex justify-center py-10">
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg max-w-2xl">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex justify-center items-start py-10">
      <div className="bg-white max-w-5xl w-full shadow rounded-lg p-6">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Avatar className="w-24 h-24 border-2 border-border">
                <AvatarImage
                  src={profileImage || "https://i.pravatar.cc/150?img=12"}
                  alt="Profile"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <button
                onClick={triggerFileInput}
                className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors shadow-sm"
              >
                <Camera size={16} />
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            <Button
              onClick={triggerFileInput}
              className="bg-[#5272FF] hover:bg-[#5272FF]/90 text-white"
            >
              Upload New Photo
            </Button>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Address</Label>
              <Input name="address" value={formData.address} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label>Contact Number</Label>
              <Input name="contact" value={formData.contact} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Birthday</Label>
            <Input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
          
            <Button
              onClick={handleSave}
              className="flex-1 bg-[#5272FF] hover:bg-[#5272F0]/90 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
            >
              Save Changes
            </Button>
            <Button onClick={handleCancel} variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
