import useMindmapStore from "src/store/mindmap.store";
import NodeSettingsContainer from "src/components/node-settings/NodeSettingsContainer";

const MindmapControls = () => {
  const { mindmap } = useMindmapStore();
  const { selectedNode } = mindmap;

  if (!selectedNode) return null;

  return (
    <div className="w-[450px] min-w-[300px] absolute top-0 right-0 p-2 bg-transparent z-50 h-screen">
      <div className="bg-white overflow-scroll h-full shadow-md px-4 py-2 rounded-lg transition-opacity opacity-[.3] hover:opacity-[1]">
        <div id="sidebar-content">
          <NodeSettingsContainer />
        </div>
      </div>
    </div>
  );
};

export default MindmapControls;
