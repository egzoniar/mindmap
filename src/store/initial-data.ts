import { Edge } from "reactflow";
import { D_Node } from "src/types/mindmap.types";

export const initialNodes: D_Node[] = [
  {
    id: "1",
    type: "rootNode",
    selected: true,
    data: {
      content: "Hello World",
      selectedLayout: "Base",
    },
    position: { x: 50, y: 25 },
  },
];

export const initialEdges: Edge[] = [
  // {
  //   id: 'e1-2',
  //   source: '1',
  //   target: '2',
  //   type: "floating",
  //   style: {
  //     stroke: '#bbb',
  //     strokeWidth: 2
  //   }
  // },
];
