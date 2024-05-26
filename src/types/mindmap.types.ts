import { Node, Edge, NodeProps, EdgeProps } from 'reactflow';

export type MindmapStateType = {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
  customNodeTypes?: Record<string, React.ComponentType<NodeProps>>;
  customEdgeTypes?: Record<string, React.ComponentType<EdgeProps>>;
  selectedNode?: Node;
  selectedEdge?: Edge;
  settings?: MindmapSettings;
  config?: MindmapConfig;
};

type MindmapSettings = {
  theme?: {};
  background?: 'grid' | 'dots' | 'lines';
  handleSize?: number;
};

type MindmapConfig = {
  snapToGrid?: boolean;
  snapGrid?: [number, number];
  zoom?: number;
  pan?: [number, number];
  minZoom?: number;
  maxZoom?: number;
};