'use client'

import { logo } from '@/app/assets'
import { Bell, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [displayDate, setDisplayDate] = useState({
    day: "Loading...",
    date: "00/00/0000"
  });
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { 
        weekday: 'long' 
      });
      const date = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      setDisplayDate({ day, date });
    };

    updateDate();
    const scheduleNextUpdate = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setHours(24, 0, 0, 0); // Set to next 00:00:00
      const timeout = tomorrow.getTime() - now.getTime();

      const timer = setTimeout(() => {
        updateDate();
        scheduleNextUpdate();
      }, timeout);

      return () => clearTimeout(timer);
    };

    const cleanup = scheduleNextUpdate();
    return cleanup;
  }, []);

  return (
    <header className="text-center bg-white border-b border-border p-4 lg:px-8 py-6 flex justify-between items-center shadow-sm">
      <div className="text-2xl font-bold text-foreground ml-6">
        <Image 
          src={logo || ""} 
          alt="Logo" 
          width={150} 
          height={150} 
          className="h-8 w-auto" 
        />
      </div>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {/* Notification Bell */}
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
          <Bell className="w-5 h-5 text-white" />
        </div>

        {/* Calendar Icon + Date */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          
          <div className="text-right min-w-[100px]">
            <div className="text-sm font-medium text-slate-800">{displayDate.day}</div>
            <div className="text-sm font-medium text-slate-800">{displayDate.date}</div>
          </div>
        </div>
      </div>
    </header>
  )
}