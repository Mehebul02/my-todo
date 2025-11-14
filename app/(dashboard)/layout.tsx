"use client"
import Header from "@/components/dashboard/layout/header"
import { AppSidebar } from "@/components/dashboard/layout/sidebar"
import { SidebarProvider, } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#EEF7FF]">
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main>
          {children}
        </main>
      </SidebarProvider>
    </div>
  )
}