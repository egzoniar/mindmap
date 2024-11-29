import SidebarContainer from "src/components/map-sidebar/SidebarContainer";
import MindmapPage from "./MindmapPage";
import { CustomSidebarProvider } from "./CustomSidebarProvider";
import { SidebarTrigger } from "src/shadcn-components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <SidebarContainer />
      <MindmapPage />
    </div>
    // <CustomSidebarProvider>
    // </CustomSidebarProvider>
  );
};

export default AppLayout;
