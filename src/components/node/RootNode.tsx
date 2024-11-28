import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode";

const RootNode = (props: NodeProps) => {
  const { id, content } = props.data;

  return (
    <BaseNode
      key={id}
      {...props}
      className="text-4xl font-black bg-orange-600 text-white uppercase"
    >
      <h1>{content.replace(/<\/?[^>]+(>|$)/g, "")}</h1>
    </BaseNode>
  );
};

export default RootNode;
