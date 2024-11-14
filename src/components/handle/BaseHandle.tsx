import { useMemo } from 'react';
import {Handle, HandleProps, Position} from 'reactflow';
import PlusIcon from '../../icons/PlusIcon';
import useMindmapStore from '../../store/mindmap.store';

type BaseHandleProps = Omit<HandleProps, "position"> & {
  icon?: "plus";
  size?: number;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
  onClick?: () => void;
}

const BaseHandle = ({
  icon,
  size,
  position = "top",
  className = "",
  onClick,
  ...rest
}: BaseHandleProps) => {

  const { settings } = useMindmapStore().mindmap;

  const positionMap = useMemo(() => ({
    top: Position.Top,
    bottom: Position.Bottom,
    left: Position.Left,
    right: Position.Right,
  }), []);

  const iconMap = useMemo(() => ({
    plus: <PlusIcon size={settings?.handleSize} />,
  }), [settings?.handleSize]);

  const correctTheHandlePositionOffset = useMemo(() => ({
    left: {left: 0, transform: "translate(-50%, -50%)"},
    right: {right: 0, transform: "translate(50%, -50%)"},
    top: {top: 0, transform: "translate(-50%, -50%)"},
    bottom: {bottom: 0, transform: "translate(-50%, 50%)"},
  }), []);

  const combineStyles = useMemo(() => ({
    ...correctTheHandlePositionOffset[position],
    zIndex: 10,
  }), [correctTheHandlePositionOffset, position]);

  const defaultClasses = "rounded-full border border-neutral-700";
  const noIconClasses = "hidden";

  const classes = icon ? defaultClasses : noIconClasses;

  const handleClasses = `${classes} ${className}`;

  return (
    <Handle
      position={positionMap[position]}
      className={handleClasses}
      style={combineStyles}
      onClick={onClick}
      {...rest}
    >
      {icon && iconMap[icon]}
    </Handle>
  );
}

export default BaseHandle;