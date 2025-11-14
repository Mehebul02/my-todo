'use client'

import { logo } from '@/app/assets'
import { Bell, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  
 const displayDate = {
    day: "Friday",
    date: "07/11/2025"
  };
  return (
    <header className="text-center  bg-white border-b border-border px-8 py-6 flex justify-between items-center shadow-sm">
      <div className="text-2xl font-bold text-foreground ml-62">
        <Image src={logo ||""} alt="Logo" width={150} height={150} />
        </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
         <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
          <Bell className="w-5 h-5 text-white" />
        </div>

        {/* Calendar Icon */}
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
          <Calendar className="w-5 h-5 text-white" />
        </div>

        {/* Date Text */}
        <div className="text-right">
          <div className="text-sm font-medium text-slate-800">{displayDate.day}</div>
          <div className="text-sm font-medium text-slate-800">{displayDate.date}</div>
        </div>
       
      </div>
    </header>
  )
}
