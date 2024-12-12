import SidebarContainer from "src/components/map-sidebar/SidebarContainer";
import MindmapPage from "./MindmapPage";
import { CustomSidebarProvider } from "src/components/app-sidebar/CustomSidebarProvider";

const AppLayout = () => {
  return (
    <CustomSidebarProvider>
      <div className="w-full h-screen">
        <SidebarContainer />
        <MindmapPage />
      </div>
    </CustomSidebarProvider>
  );
};

export default AppLayout;
