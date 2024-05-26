import { ReactFlow, Background, MiniMap, BackgroundVariant } from 'reactflow';
import useMindmapStore from '../store/mindmap.store';

const MindmapPage = () => {
  const { mindmap, onNodesChangeHandler, onEdgesChangeHandler } = useMindmapStore();
  const { nodes, edges, customNodeTypes, customEdgeTypes } = mindmap;

  return (
    <>
      <ReactFlow 
        nodes={nodes} 
        onNodesChange={onNodesChangeHandler}
        edges={edges}
        onEdgesChange={onEdgesChangeHandler}
        nodeTypes={customNodeTypes}
        edgeTypes={customEdgeTypes}
        minZoom={0.09}
        maxZoom={2}
        fitView
      >
        <MiniMap />
      </ReactFlow>
    </>
  )
};

export default MindmapPage;