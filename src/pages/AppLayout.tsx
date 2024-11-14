import SidebarContainer from "src/components/sidebar/SidebarContainer";
import MindmapPage from "./MindmapPage";


const AppLayout = () => {

  return (
    <div className="h-screen">
      <SidebarContainer />
      <MindmapPage />
    </div>
  )
};

export default AppLayout;