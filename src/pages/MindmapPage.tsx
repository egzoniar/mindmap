import { ReactFlow, Background, MiniMap, BackgroundVariant } from 'reactflow';
import useMindmapStore from '../store/mindmap.store';

const MindmapPage = () => {
  const { mindmap, onNodesChangeHandler, onEdgesChangeHandler, onSelectionChange } = useMindmapStore();
  const { nodes, edges, selectedNode, customNodeTypes, customEdgeTypes } = mindmap;

  return (
    <div style={{height: "100vh "}}>
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
        fitView
      >
        <MiniMap />
      </ReactFlow>
    </div>
  )
};

export default MindmapPage;