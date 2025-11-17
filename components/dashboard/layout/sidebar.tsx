/* eslint-disable @typescript-eslint/no-explicit-any */
// components/app-sidebar.tsx
"use client";
import { useEffect, useState } from "react";
import {  LogOut,  } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import Image from "next/image";
import { profileImage } from "@/app/assets";
import { MobileSidebar } from "./MobileSidebar";
import { items } from "./nav-item";
import Link from "next/link";
import Cookies from "js-cookie";
import { getMe } from "@/lib/api";
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}


export function AppSidebar() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
 const token = Cookies.get("access_token")

  // Example in useEffect or handler
useEffect(() => {
  const fetchUser = async () => {
    try {
      
      if (!token) return;

      const res = await getMe(token); // ✅ awaited
      const user = res.user ?? res;
      console.log(user, "Userrr====>");
      setUser(user); // update state
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  };

  fetchUser();
}, []);

const handleLogout = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  window.location.href = "/auth/signin"; 
};

  if (isMobile) {
    return (
      <MobileSidebar open={open} onOpenChange={setOpen} user={user}/>
    );
  }

  return (
    <ShadcnSidebar className="bg-[#0D224A] border-r border-slate-700">
      <SidebarContent>
        <div className="px-4 py-6 flex flex-col items-center gap-3 rounded-lg mb-6">
      <Image
        src={user?.profile_image || profileImage}
        alt="User avatar"
        className="w-16 h-16 rounded-full border-2 border-slate-600"
        width={64}
        height={64}
      />
      <div className="text-center">
        <h3 className="text-white font-medium">{user?.first_name} {user?.last_name}</h3>
        <p className="text-slate-400 text-sm">{user?.email}</p>
      </div>
    </div>
        {/* <MenuSection /> */}
         <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="text-[16px] text-[#8CA3CD] hover:text-white hover:bg-slate-700">
                <Link href={item.url}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
       <SidebarMenuButton asChild className="text-slate-300 hover:text-white hover:bg-slate-700">
          <button onClick={handleLogout} className="cursor-pointer">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </SidebarMenuButton>
      </SidebarFooter>
    </ShadcnSidebar>
  );
}








