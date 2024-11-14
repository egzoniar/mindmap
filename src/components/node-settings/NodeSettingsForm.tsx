import { useCallback } from "react";
import { IconButton } from "src/shadcn-components/ui/icon-button";
import { Input } from "src/shadcn-components/ui/input";
import useMindmapStore from "src/store/mindmap.store";
import TiptapEditor from "src/components/tiptap-editor/TiptapEditor";
import { cn } from "src/lib/utils";


const NodeSettingsForm = () => {
  const { mindmap, addNode, editNode, removeNode } = useMindmapStore();
  const { selectedNode } = mindmap;

  const useSafeAddNode = useCallback(() => {
    if (!selectedNode) return () => {};

    addNode({
      parentX: selectedNode.position.x,
      parentY: selectedNode.position.y,
      parentId: selectedNode.id,
      createSide: "right",
    });
  }, [selectedNode]);

  return (
    <div>
      <div className="relative">
        <h4 className="text-md font-base leading-none">Title:</h4>
        <div className="spacing my-2"></div>
        <Input
          className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Node title"
          value={selectedNode?.data.title}
          onChange={(e) => editNode({ title: e.target.value })}
        />
      </div>

      <div className="spacing my-4"></div>

      {selectedNode?.type !== "rootNode" && (
        <>
          <h4 className="text-md font-base leading-none">Content:</h4>
          <div className="spacing my-2"></div>
          {
            <TiptapEditor 
              onChange={(richText) => editNode({ description: richText })} 
              description={selectedNode?.data.description || ""}
            />
          }
        </>
      )}

      <div className={cn("flex gap-2 justify-end flex-wrap my-4")}>
        <IconButton 
          variant="default"
          size="sm"
          iconName="add"
          iconSize={16}
          type="button" 
          onClick={useSafeAddNode}
        >
          New Node
        </IconButton>
        {selectedNode?.type !== "rootNode" && (
          <IconButton 
            size="sm" 
            iconName="delete" 
            iconSize={16} 
            variant="outline"
            className="text-red-500 hover:text-red-500 border-red-500"
            onClick={removeNode}
          >
            Delete Node
          </IconButton>
        )}
      </div>
      <div className="spacing my-8"></div>
    </div>
  )
};
export default NodeSettingsForm;