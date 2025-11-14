"use client"
import Header from "@/components/dashboard/layout/header"
import { AppSidebar } from "@/components/dashboard/layout/sidebar"
import { SidebarProvider, } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main>
          {children}
        </main>
      </SidebarProvider>
    </>
  )
}