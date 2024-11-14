import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode";
import { useEffect, useRef } from "react";

const DefaultNode = (props: NodeProps) => {
  const { id, title, description = "Write a description here..." } = props.data;

  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!descriptionRef.current) return;

    descriptionRef.current.innerHTML = description;
  }, [description]);

  return (
      <BaseNode 
        key={id} {...props}
        className="bg-white border border-gray-200 px-4 py-4"
      >
        <h1 className="text-4xl font-bold text-purple-600 border-b mb-2">{title}</h1>
        <div ref={descriptionRef} className="tiptap"></div>
      </BaseNode>
  );
};

export default DefaultNode;