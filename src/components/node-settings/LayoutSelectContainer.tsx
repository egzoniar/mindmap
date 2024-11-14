import NodeLayoutTypes from "./NodeLayoutTypes";

const LayoutSelectContainer = () => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="scroll-m-20 text-md font-base tracking-tight">
        Node Layout:
      </h4>
      <div className='overflow-x-scroll pb-4 hide-scrollbar'>
        <div className="flex gap-3 w-fit py-3 pr-2 pl-1">
          <NodeLayoutTypes type="Default" />
          <NodeLayoutTypes type="Ghost" />
          <NodeLayoutTypes type="Base" />
        </div>
      </div>
    </div>
  );
};
export default LayoutSelectContainer;