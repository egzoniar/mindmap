import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode";
import { useEffect, useRef } from "react";
import hljs from "highlight.js"; // Import Highlight.js
import "highlight.js/styles/atom-one-dark.css"; // Atom One Dark

const DefaultNode = (props: NodeProps) => {
  const { id, content = "Write a content here..." } = props.data;

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Set the inner HTML
    contentRef.current.innerHTML = content;

    // Find code blocks inside the content and apply Highlight.js
    contentRef.current.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
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
