"use client"
import Header from "@/components/dashboard/layout/header"
import { AppSidebar } from "@/components/dashboard/layout/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "sonner";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#EEF7FF] w-full min-h-screen">
      <Header />

      <SidebarProvider>
        <div className="flex w-full">  
          <AppSidebar />
          <main className="flex-1 flex justify-center items-start ">
            <div className="w-full ">
              {children}
              <Toaster />
            </div>
          </main>

        </div>
      </SidebarProvider>
    </div>
  )
}
