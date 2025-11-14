import { profileImage } from "@/app/assets";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import { items } from "./nav-item";
import Link from "next/link";
export function MobileSidebar({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {


  return (
    <>
  
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-md shadow-sm"
        onClick={() => onOpenChange(true)}
      >
        <Menu className="h-6 w-6 text-slate-700" />
      </Button>

    
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="left"
          className="w-[300px] p-0 bg-[#0D224A] border-r border-slate-700"
        >
          <div className="h-full flex flex-col">
            <SidebarContent className="flex-1 overflow-y-auto pb-0">
                 <div className="px-4 py-6 flex flex-col items-center gap-3 rounded-lg mb-6">
      <Image
        src={profileImage}
        alt="User avatar"
        className="w-16 h-16 rounded-full border-2 border-slate-600"
        width={64}
        height={64}
      />
      <div className="text-center">
        <h3 className="text-white font-medium">anonymous</h3>
        <p className="text-slate-400 text-sm">anonymous@email.com</p>
      </div>
    </div>
             {/* <MenuSection /> */}
         <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="text-[16px] text-[#8CA3CD] hover:text-white hover:bg-slate-700">
                <a href={item.url}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t border-slate-700 pt-4">
             <SidebarMenuButton asChild className="text-slate-300 hover:text-white hover:bg-slate-700">
          <Link href="/api/auth/logout">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </SidebarMenuButton>
            </SidebarFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}