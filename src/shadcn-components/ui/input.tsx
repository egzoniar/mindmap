import * as React from "react"

import { cn } from "src/lib/utils"
import { cva } from "class-variance-authority"

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background !text-primary !px-3 !py-2 !text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  // {
  //   variants: {
  //     size: {
  //       default: "h-10",
  //       sm: "h-9",
  //       lg: "h-11",
  //       auto: "h-auto",
  //     },
  //   },
  //   defaultVariants: {
  //     size: "auto",
  //   },
  // }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants(),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
