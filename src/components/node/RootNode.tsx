import useMindmapStore from "../../store/mindmap.store";
import BaseHandle from "../handle/BaseHandle";
import { NodeProps } from "reactflow";

const RootNode = ({ data, xPos, yPos, id }: NodeProps) => {
  const {addNode} = useMindmapStore();

  return (
    <div className="[&>.root-handle]:hover:block">
      <div className="bg-white rounded-md px-10 py-5 max-w-56 shadow-md">
        <h1 className="text-4xl font-black text-purple-600 uppercase">{data.title}</h1>
      </div>
      <BaseHandle 
        className="root-handle hidden" 
        type="source" 
        position="top" 
      />
      <BaseHandle 
        className="root-handle hidden" 
        type="source" 
        position="left" 
        id="root-left-handle"
        onClick={() => {
          console.log('add node');
          addNode({parentId: id, parentX: xPos, parentY: yPos, createSide: 'left'});
        }} 
      />
      <BaseHandle 
        className="root-handle hidden" 
        type="source" 
        position="right" 
      />
      <BaseHandle 
        className="root-handle hidden" 
        type="source" 
        position="bottom" 
      />
    </div>
  );
};

export default RootNode;