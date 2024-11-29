import { ReactFlow, MiniMap, Background, BackgroundVariant } from "reactflow";
import useMindmapStore from "../store/mindmap.store";
import { useCallback } from "react";

const MindmapPage = () => {
  const {
    mindmap,
    onNodesChangeHandler,
    onEdgesChangeHandler,
    onSelectionChange,
  } = useMindmapStore();
  const { nodes, edges, customNodeTypes, customEdgeTypes } = mindmap;

  const setInitialViewport = useCallback(() => {
    // Calculate viewport to center the root node
    const viewportWidth = window.innerWidth - 800;
    const viewportHeight = window.innerHeight - 100;

    const rootNodeX = nodes[0].position.x; // X position of the root node
    const rootNodeY = nodes[0].position.y; // Y position of the root node

    const rootNodeWidth = nodes[0].width ? nodes[0].width / 2 : 0; // width of the root node
    const rootNodeHeight = nodes[0].height ? nodes[0].height / 2 : 0; // height of the root node

    return {
      x: Math.abs(rootNodeX - viewportWidth / 2) - rootNodeWidth,
      y: Math.abs(rootNodeY - viewportHeight / 2) - rootNodeHeight,
      zoom: 1,
    };
  }, [nodes]);

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChangeHandler}
        onSelectionChange={onSelectionChange}
        onEdgesChange={onEdgesChangeHandler}
        nodeTypes={customNodeTypes}
        edgeTypes={customEdgeTypes}
        minZoom={0.09}
        maxZoom={2}
        defaultViewport={setInitialViewport()}
      >
        <MiniMap />
        <Background
          gap={20}
          size={1}
          color="#000"
          className="bg-slate-100"
          variant={BackgroundVariant.Dots}
        />
      </ReactFlow>
    </div>
  );
};

export default MindmapPage;
