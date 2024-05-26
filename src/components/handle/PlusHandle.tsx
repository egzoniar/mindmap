import { useMemo } from "react";
import { Connection, Handle, Position } from "reactflow";
import PlusIcon from "../../icons/PlusIcon";

type PlusHandleProps = {
  position: "top" | "bottom" | "left" | "right";
  type?: "source" | "target";
  classes?: string;
  onConnect?: (params: Connection) => void;
};

const PlusHandle = ({
  position,
  type = "source",
  classes = "",
  onConnect = () => {},
}: PlusHandleProps) => {

  const positionMap = useMemo(() => {
    return {
      top: Position.Top,
      bottom: Position.Bottom,
      left: Position.Left,
      right: Position.Right,
    };
  }, [position]);

  const defaultClasses = "rounded-full text-white";
  const handleClasses = `handle ${defaultClasses} ${classes}`;

  return (
    <Handle
      type={type}
      position={positionMap[position]}
      className={handleClasses}
      // style={{left: 0, transform: "translate(-50%, -50%)"}}
      onConnect={(params) => console.log("handle onConnect", params)}
    >
      <PlusIcon size={15} />
    </Handle>
  );
};

export default PlusHandle;