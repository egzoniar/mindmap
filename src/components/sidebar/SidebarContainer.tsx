import { useCallback } from "react";
import useMindmapStore from "src/store/mindmap.store";
import { cn } from "src/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/shadcn-components/ui/tabs"
import NodeSettingsContainer from "src/components/node-settings/NodeSettingsContainer";
import MindmapSettingsContainer from "src/components/mindmap-settings/MindmapSettingsContainer";
import { Hexagon, GitPullRequest, Settings } from "lucide-react";

const MindmapControls = () => {
  const { mindmap } = useMindmapStore();
  const { selectedNode } = mindmap;

  const showControls = selectedNode ? "" : "translate-x-[100%]";

  const useSafeRenderContent = useCallback(() => {
    if (!selectedNode) return "Nothing to display...";

    return <NodeSettingsContainer />;
  }, [selectedNode]);

  return (
    <div
      className={cn(
        "w-[500px] min-w-[300px] h-screen transition-transform duration-200 absolute top-0 right-0 px-6 py-4 shadow-lg bg-white z-50",
        showControls
      )}
    >
      <h1 className="font-extralight text-3xl tracking-tight pb-1 border-b text-gray-600">Mindmap Controls</h1>
      <div className="spacing my-6"></div>
      <div id="sidebar-content" className="h-[calc(100vh-90px)]">
        <Tabs defaultValue="node-settings">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="node-settings">
              <div className="flex items-center gap-1">
                <Hexagon size={18} />
                <h4 className="scroll-m-20 text-md font-black tracking-tight">
                  Node
                </h4>
              </div>
            </TabsTrigger>
            <TabsTrigger value="edge-settings">
              <div className="flex items-center gap-1">
                <GitPullRequest size={18} />
                <h4 className="scroll-m-20 text-md font-black tracking-tight">
                  Edge
                </h4>
              </div>
            </TabsTrigger>
            <TabsTrigger value="mindmap-settings">
              <div className="flex items-center gap-1">
                <Settings size={18} />
                <h4 className="scroll-m-20 text-md font-black tracking-tight">
                  Mindmap
                </h4>
              </div>
            </TabsTrigger>
          </TabsList>
          <div className="space my-6"></div>
          <TabsContent value="node-settings">{useSafeRenderContent()}</TabsContent>
          <TabsContent value="edge-settings">
            <div className="flex pl-3 items-center justify-center text-slate-800 gap-1 my-7">
              <GitPullRequest size={26} />
              <h4 className="scroll-m-20 text-lg font-black tracking-tight">
                Edge Settings
              </h4>
            </div>
            coming soon...
          </TabsContent>
          <TabsContent value="mindmap-settings">
            <MindmapSettingsContainer />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MindmapControls;
