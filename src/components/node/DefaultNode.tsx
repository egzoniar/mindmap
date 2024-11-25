import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode";
import { useEffect, useRef } from "react";

const DefaultNode = (props: NodeProps) => {
  const { id, content = "Write a content here..." } = props.data;

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    contentRef.current.innerHTML = content;
  }, [content]);

  return (
    <BaseNode
      key={id}
      {...props}
      className="bg-white border border-gray-200 px-4 py-4"
    >
      <div ref={contentRef} className="tiptap"></div>
    </BaseNode>
  );
};

export default DefaultNode;
