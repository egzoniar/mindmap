import { Node, Edge, NodeProps, EdgeProps } from "reactflow";

export type NodeData = {
  content?: string;
  selectedLayout?: "Default" | "Base" | "Ghost";
};

export type D_Node = Node<NodeData>;

export type MindmapStateType = {
  id: string;
  name: string;
  nodes: D_Node[];
  edges: Edge[];
  customNodeTypes?: Record<string, React.ComponentType<NodeProps>>;
  customEdgeTypes?: Record<string, React.ComponentType<EdgeProps>>;
  selectedNode?: D_Node;
  selectedEdge?: Edge;
  settings?: MindmapSettings;
  config?: MindmapConfig;
};

export type ThemeColors = {
  [key: string]: string[];
};

export type ThemeSettings = {
  selectedColorGroup: string;
  colors: ThemeColors;
};

type MindmapSettings = {
  theme: ThemeSettings;
  background?: "grid" | "dots" | "lines";
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
