
import { create } from 'zustand';
import { Node, Edge, NodeChange, EdgeChange, applyNodeChanges, applyEdgeChanges, NodeProps } from 'reactflow';
import { MindmapStateType } from '../types/mindmap.types';
import { initialEdges, initialNodes } from './initial-data';
import RootNode from '../components/node/RootNode';
import FloatingEdge from '../components/edge/FloatingEdge';

type AddNodePayload = {
  parentX: number;
  parentY: number;
  parentId: string;
  createSide: 'left' | 'right' | 'top' | 'bottom';
};

type MindmapStore = {
  mindmap: MindmapStateType;
  setMindmap: (mindmap: MindmapStateType) => void;
  addNode: (payload: AddNodePayload) => void;
  addEdge: (edge: Edge) => void;
  removeNode: (nodeId: string) => void;
  removeEdge: (edgeId: string) => void;
  onNodesChangeHandler: (node: NodeChange[]) => void;
  onEdgesChangeHandler: (edge: EdgeChange[]) => void;
};

const useMindmapStore = create<MindmapStore>((set, get) => ({
  mindmap: {
    id: '',
    name: '',
    nodes: initialNodes,
    edges: initialEdges,
    customNodeTypes: {
      rootNode: RootNode,
    },
    customEdgeTypes: {
      floating: FloatingEdge,
    },
    settings: {
      handleSize: 15,
    }
  },
  setMindmap: (mindmap) => set({ mindmap }),
  setNodes: (nodes: Node[]) => set((state) => ({
    mindmap: {
      ...state.mindmap,
      nodes,
    },
  })),
  setEdges: (edges: Edge[]) => set((state) => ({
    mindmap: {
      ...state.mindmap,
      edges,
    },
  })),
  addNode: (payload: AddNodePayload) => set((state) => {
    const { parentX, parentY, parentId, createSide } = payload;
    const newNode: Node = {
      id: `${state.mindmap.nodes.length + 1}`,
      data: { label: 'Write something here...' },
      position: {
        x: createSide === 'left' ? parentX - 500 : createSide === 'right' ? parentX + 500 : parentX,
        y: createSide === 'top' ? parentY - 500 : createSide === 'bottom' ? parentY + 500 : parentY,
      },
    };

    const newEdge: Edge = {
      id: `e${parentId}-${newNode.id}`,
      source: parentId,
      target: newNode.id,
      type: 'floating',
      style: {
        strokeWidth: 2,
        stroke: '#A5A5A5',
      }
      // animated: true,
    };

    return {
      ...state,
      mindmap: {
        ...state.mindmap,
        nodes: [ ...state.mindmap.nodes, newNode ],
        edges: [ ...state.mindmap.edges, newEdge ],
      },
    }

  }),
  addEdge: (edge) => set((state) => ({
    mindmap: {
      ...state.mindmap,
      edges: [...state.mindmap.edges, edge],
    },
  })),
  removeNode: (nodeId) => set((state) => ({
    mindmap: {
      ...state.mindmap,
      nodes: state.mindmap.nodes.filter((node) => node.id !== nodeId),
      edges: state.mindmap.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    },
  })),
  removeEdge: (edgeId) => set((state) => ({
    mindmap: {
      ...state.mindmap,
      edges: state.mindmap.edges.filter((edge) => edge.id !== edgeId),
    },
  })),
  onNodesChangeHandler: (changes: NodeChange[]) => set((state) => ({
    mindmap: {
      ...state.mindmap,
      nodes: applyNodeChanges(changes, state.mindmap.nodes),
    },
  })),
  onEdgesChangeHandler: (changes: EdgeChange[]) => set((state) => ({
    mindmap: {
      ...state.mindmap,
      edges: applyEdgeChanges(changes, state.mindmap.edges),
    },
  })),
}));

export default useMindmapStore;