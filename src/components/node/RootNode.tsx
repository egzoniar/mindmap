import useMindmapStore from "src/store/mindmap.store";
import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode";

const RootNode = (props: NodeProps) => {
  const { data } = props;
  const {addNode} = useMindmapStore();

  return (
    <BaseNode 
      key={data.id} {...props}
      className="text-4xl font-black bg-blue-500 text-white uppercase">
      <h1>{data.title}</h1>
    </BaseNode>
  );
};

export default RootNode;