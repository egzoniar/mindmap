import React from "react";
import { Background, BackgroundProps, useStore } from "reactflow";

interface CustomBackgroundProps extends BackgroundProps {
  zoomIndependentDots?: boolean; // Custom prop for zoom-independent behavior
}

const CustomBackground: React.FC<CustomBackgroundProps> = ({
  zoomIndependentDots = false,
  gap = 20,
  size = 2,
  color = "#aaa",
  ...rest
}) => {
  // Access the zoom level from the React Flow store
  const zoom = useStore((state) => state.transform[2]);

  // Adjust gap and size if zoom-independent dots are enabled
  const adjustedGap =
    zoomIndependentDots && typeof gap === "number" ? gap / zoom : gap;
  const adjustedSize = zoomIndependentDots ? size / zoom : size;

  return (
    <Background
      gap={adjustedGap}
      size={adjustedSize}
      color={color}
      {...rest} // Pass remaining props to the original Background
    />
  );
};

export default CustomBackground;
