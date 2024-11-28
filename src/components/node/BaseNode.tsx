import { HTMLAttributes, useCallback } from "react";
import { NodeProps } from "reactflow";
import BaseHandle from "../handle/BaseHandle";
import { cn } from "src/lib/utils";

type BaseNodeProps = NodeProps & HTMLAttributes<JSX.ElementChildrenAttribute>;

const BaseNode = ({ type, selected, children, className }: BaseNodeProps) => {
  const onSelectNodeClasses = `${
    selected
      ? " ring-8 border-transparent shadow-none ring-orange-600 ring-offset-4"
      : ""
  }`;

  const renderHandles = useCallback(() => {
    switch (type) {
      case "rootNode":
        return <BaseHandle type="source" />;
      default:
        return (
          <>
            <BaseHandle type="source" />
            <BaseHandle type="target" />
          </>
        );
    }
  }, [type]);

  return (
    <>
      <div
        className={cn(
          "transform transition-all duration-200 rounded-md px-10 py-5 hover:cursor-pointer shadow-sm shadow-slate-300",
          className,
          onSelectNodeClasses
        )}
      >
        {children}
      </div>
      {renderHandles()}
    </>
  );
};

export default BaseNode;
