import { SidebarProvider } from "src/shadcn-components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { ReactNode } from "react";

interface SidebarProviderProps {
  children: ReactNode;
}

export function CustomSidebarProvider({ children }: SidebarProviderProps) {
  return (
    <SidebarProvider className="relative bg-transparent" defaultOpen={false}>
      <div className="absolute top-0 left-0 z-50 bg-transparent">
        <AppSidebar />
      </div>
      {children}
    </SidebarProvider>
  );
}
