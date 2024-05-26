import { Edge, Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'rootNode',
    data: {
      title: 'ISLAM',
    },
    position: { x: 50, y: 25 },
  },
];

export const initialEdges: Edge[] = [
  // { id: 'e1-2', source: '1', target: '2', animated: true, label: 'This is an animated edge'},
];