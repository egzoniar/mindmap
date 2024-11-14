import { NodeChange, Node } from "reactflow";

export type ApplyNodeChangeTypes = {
  changes: NodeChange[];
  nodeToChange?: Node;
};

export const applyNodeChange = (changes: NodeChange[], nodeToChange?: Node) => {
  if(!nodeToChange) return;

  const { type } = changes[0];

  if(type === 'position' && changes[0].dragging) {
    return {
      ...nodeToChange,
      position: changes[0].position,
      positionAbsolute: changes[0].positionAbsolute,
    };
  }
  else return nodeToChange;
};