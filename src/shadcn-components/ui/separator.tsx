import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "src/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "w-[1px] my-1",
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
