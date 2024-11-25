import { create } from "zustand";
import {
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import { MindmapStateType, D_Node, NodeData } from "src/types/mindmap.types";
import { initialEdges, initialNodes } from "./initial-data";
import RootNode from "src/components/node/RootNode";
import FloatingEdge from "src/components/edge/FloatingEdge";
import DefaultNode from "src/components/node/DefaultNode";
import { applyNodeChange } from "src/utils/node-changes";

type AddNodePayload = {
  parentX: number;
  parentY: number;
  parentId: string;
  createSide: "left" | "right" | "top" | "bottom";
};

type SelectionChangePayload = {
  edges: Edge[];
  nodes: D_Node[];
};

type MindmapStore = {
  mindmap: MindmapStateType;
  setMindmap: (mindmap: MindmapStateType) => void;
  setThemeColorGroup: (colorGroup: string) => void;
  addNode: (payload: AddNodePayload) => void;
  addEdge: (edge: Edge) => void;
  editNode: (data: NodeData) => void;
  removeNode: () => void;
  removeEdge: (edgeId: string) => void;
  onNodesChangeHandler: (node: NodeChange[]) => void;
  onEdgesChangeHandler: (edge: EdgeChange[]) => void;
  onNodeSelectionChange: (selectedNode: D_Node[]) => void;
  onEdgeSelectionChange: (selectedEdge: Edge[]) => void;
  onSelectionChange: (selected: SelectionChangePayload) => void;
};

const useMindmapStore = create<MindmapStore>((set, get) => ({
  mindmap: {
    id: "",
    name: "",
    nodes: initialNodes,
    edges: initialEdges,
    customNodeTypes: {
      rootNode: RootNode,
      defaultNode: DefaultNode,
    },
    customEdgeTypes: {
      floating: FloatingEdge,
    },
    settings: {
      handleSize: 15,
      theme: {
        selectedColorGroup: "cg1",
        colors: {
          cg1: ["#B7AC44", "#DF362D", "#FF8300", "#FF4500"],
          cg2: ["#E5DDC8", "#01949A", "#004369", "#DB1F48"],
          cg3: ["#EFEBE0", "#FB8DA0", "#FB6B90", "#FB4570"],
          cg4: ["#68BBE3", "#0E86D4", "#055C9D", "#003060"],
        },
      },
    },
  },
  setThemeColorGroup: (colorGroup: string) =>
    set((state) => {
      const { settings } = state.mindmap;
      if (!settings) return state;

      const { theme } = settings;
      const updatedTheme = {
        ...theme,
        selectedColorGroup: colorGroup,
      };

      return {
        mindmap: {
          ...state.mindmap,
          settings: {
            ...settings,
            theme: updatedTheme,
          },
        },
      };
    }),
  setMindmap: (mindmap) => set({ mindmap }),
  setNodes: (nodes: D_Node[]) =>
    set((state) => ({
      mindmap: {
        ...state.mindmap,
        nodes,
      },
    })),
  setEdges: (edges: Edge[]) =>
    set((state) => ({
      mindmap: {
        ...state.mindmap,
        edges,
      },
    })),
  addNode: (payload: AddNodePayload) =>
    set((state) => {
      const { parentX, parentY, parentId, createSide } = payload;
      const newNode: D_Node = {
        id: `${state.mindmap.nodes.length + 1}`,
        type: "defaultNode",
        data: {
          content: "What is the node about?",
          selectedLayout: "Default",
        },
        position: {
          x:
            createSide === "left"
              ? parentX - 500
              : createSide === "right"
              ? parentX + 500
              : parentX,
          y:
            createSide === "top"
              ? parentY - 500
              : createSide === "bottom"
              ? parentY + 500
              : parentY,
        },
      };

      const newEdge: Edge = {
        id: `e${parentId}-${newNode.id}`,
        source: parentId,
        target: newNode.id,
        type: "floating",
        style: {
          strokeWidth: 3,
          stroke: "#bbb",
        },
        // animated: true,
      };

      const newState = {
        ...state,
        mindmap: {
          ...state.mindmap,
          nodes: [...state.mindmap.nodes, newNode],
          edges: [...state.mindmap.edges, newEdge],
        },
      };

      return newState;
    }),
  addEdge: (edge) =>
    set((state) => ({
      mindmap: {
        ...state.mindmap,
        edges: [...state.mindmap.edges, edge],
      },
    })),
  editNode: (data: NodeData) =>
    set((state) => {
      const { selectedNode } = state.mindmap;
      if (!selectedNode) return state;

      const updatedNode = {
        ...selectedNode,
        data: {
          ...selectedNode.data,
          ...data,
        },
      };

      return {
        mindmap: {
          ...state.mindmap,
          nodes: state.mindmap.nodes.map((node) => {
            if (node.id === selectedNode.id) {
              return updatedNode;
            }
            return node;
          }),
          selectedNode: updatedNode,
        },
      };
    }),
  removeNode: () =>
    set((state) => {
      const { selectedNode } = state.mindmap;

      // cannot remove root node
      if (selectedNode?.type === "rootNode") return state;

      const mindmap = {
        ...state.mindmap,
        nodes: state.mindmap.nodes.filter(
          (node) => node.id !== selectedNode?.id
        ),
        edges: state.mindmap.edges.filter(
          (edge) =>
            edge.source !== selectedNode?.id && edge.target !== selectedNode?.id
        ),
      };

      return {
        ...state,
        mindmap,
      };
    }),
  removeEdge: (edgeId) =>
    set((state) => ({
      mindmap: {
        ...state.mindmap,
        edges: state.mindmap.edges.filter((edge) => edge.id !== edgeId),
      },
    })),
  onNodeSelectionChange: (selectedNode: Node[]) =>
    set((state) => ({
      mindmap: {
        ...state.mindmap,
        selectedNode: selectedNode.length === 0 ? undefined : selectedNode[0],
      },
    })),
  onEdgeSelectionChange: (selectedEdge: Edge[]) =>
    set((state) => ({
      mindmap: {
        ...state.mindmap,
        selectedEdge: selectedEdge.length === 0 ? undefined : selectedEdge[0],
      },
    })),
  onSelectionChange: (selected: SelectionChangePayload) => {
    const { nodes, edges } = selected;
    get().onNodeSelectionChange(nodes);
    get().onEdgeSelectionChange(edges);
  },
  onNodesChangeHandler: (changes: NodeChange[]) =>
    set((state) => {
      const { selectedNode } = state.mindmap;

      return {
        mindmap: {
          ...state.mindmap,
          nodes: applyNodeChanges(changes, state.mindmap.nodes),
          selectedNode: applyNodeChange(changes, selectedNode) as Node,
        },
      };
    }),
  onEdgesChangeHandler: (changes: EdgeChange[]) =>
    set((state) => ({
      mindmap: {
        ...state.mindmap,
        edges: applyEdgeChanges(changes, state.mindmap.edges),
      },
    })),
}));

export default useMindmapStore;
