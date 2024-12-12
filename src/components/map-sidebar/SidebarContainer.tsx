import useMindmapStore from "src/store/mindmap.store";
import NodeSettingsContainer from "src/components/node-settings/NodeSettingsContainer";

const MindmapControls = () => {
  const { mindmap } = useMindmapStore();
  const { selectedNode } = mindmap;

  if (!selectedNode) return null;

  return (
    <div className="w-[500px] min-w-[300px] absolute top-0 right-0 p-2 bg-transparent z-50 overflow-scroll">
      <div className="bg-white shadow-md px-6 py-4 rounded-lg transition-opacity opacity-[.3] hover:opacity-[1]">
        <div id="sidebar-content">
          <NodeSettingsContainer />
        </div>
      </div>
    </div>
  );
};

export default MindmapControls;
