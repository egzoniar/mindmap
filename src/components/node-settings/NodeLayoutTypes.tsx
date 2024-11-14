import { FC, useCallback, useMemo } from "react";
import { cn } from "src/lib/utils";
import { Skeleton } from "src/shadcn-components/ui/skeleton";
import { CircleCheck } from 'lucide-react';
import useMindmapStore from "src/store/mindmap.store";

type NodeLayoutTypesProps = {
  type?: "Default" | "Base" | "Ghost";
};

const NodeLayoutTypes: FC<NodeLayoutTypesProps> = ({type = "Default"}) => {
  const {editNode, mindmap} = useMindmapStore();

  const useSafeSelectedLayout = useMemo(() => {
    return mindmap.selectedNode?.data.selectedLayout ?? "Default";
  }, [mindmap.selectedNode]);

  const selected = useSafeSelectedLayout === type;

  const DefaultAndGhostLayout:FC<NodeLayoutTypesProps> = ({type}) => (
    <div className={cn(
      "flex flex-col gap-1 justify-between w-full h-[60px] p-1 rounded-md",
      type === "Default" && "border"
    )}>
      <Skeleton className='w-10 h-10 rounded-md' />
      <div className='flex flex-col gap-[2px]'>
        <Skeleton className='w-11/12 h-2 rounded-xl' />
        <Skeleton className='w-2/3 h-2 rounded-xl' />
        <Skeleton className='w-6/7 h-2 rounded-xl' />
      </div>
    </div>
  );

  const BaseLayout = () => (
    <div className="flex justify-center items-center w-full h-[60px] p-2 rounded-md border">
      <Skeleton className="w-3/4 h-10 rounded-md" />
    </div>
  );

  const renderLayout = useMemo(() => {
    switch (type) {
      case "Default":
      case "Ghost":
        return <DefaultAndGhostLayout type={type} />;
      case "Base":
        return <BaseLayout />;
      default: return null;
    };
  }, []);

  const selectedStyle = cn("border-transparent shadow-md ring-2 ring-green-600");
  const hoverStyle = cn("hover:cursor-pointer hover:border hover:border-gray-400 hover:shadow-md");

  const onClickHandler = useCallback(() => editNode({ selectedLayout: type }), []);

  return (
    <div
      onClick={onClickHandler} 
      className={cn(
        "group flex flex-col relative gap-3 items-center justify-center w-[100px] h-[100px] rounded-lg p-2 border border-gray-200 transition-all duration-200",
        (selected) ? selectedStyle : hoverStyle
      )}
    >
      {renderLayout}
      <label className={cn(
        "label text-xs font-light leading-[7px] group-hover:text-gray-800 transition-colors",
        (!selected) && "text-gray-400"
      )}>{type}</label>
      {selected && <CircleCheck size={22} strokeWidth={2} color="green" className="absolute z-50 top-[-11px] right-[-10px] bg-white rounded-full" />}
    </div>
  )
};
export default NodeLayoutTypes;