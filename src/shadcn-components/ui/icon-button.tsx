import { useCallback } from "react";
import { Button, buttonVariants, ButtonProps } from "./button";
import {
  Bold,
  Underline,
  Italic,
  Code,
  Link,
  Eraser,
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  Braces,
  Quote,
  Minus,
  WrapText,
  RotateCw,
  RotateCcw,
  ArrowDownToLine,
  Strikethrough,
  X,
  Plus,
  Superscript,
  Subscript,
  ListChecks,
  ImagePlus,
} from "lucide-react";
import { cn } from "src/lib/utils";

interface IconButtonProps extends ButtonProps {
  iconName?: string;
  iconSize?: number;
  iconSide?: "left" | "right";
}

const IconButton = (props: IconButtonProps) => {
  const {
    iconName,
    iconSize = 18,
    iconSide = "left",
    size = iconName ? "icon" : "auto",
    variant = "outline",
    className,
    children,
    ...rest
  } = props;

  const renderIcon = useCallback(() => {
    if (!iconName) return null;
    return {
      bold: <Bold size={iconSize} />,
      underline: <Underline size={iconSize} />,
      italic: <Italic size={iconSize} />,
      "inline-code": <Code size={iconSize} />,
      link: <Link size={iconSize} />,
      clearMarks: <Eraser size={iconSize} />,
      paragraph: <Pilcrow size={iconSize} />,
      heading1: <Heading1 size={iconSize} />,
      heading2: <Heading2 size={iconSize} />,
      heading3: <Heading3 size={iconSize} />,
      heading4: <Heading4 size={iconSize} />,
      heading5: <Heading5 size={iconSize} />,
      heading6: <Heading6 size={iconSize} />,
      bulletlist: <List size={iconSize} />,
      numberedlist: <ListOrdered size={iconSize} />,
      codeBlock: <Braces size={iconSize} />,
      blockquote: <Quote size={iconSize} />,
      horizontalRule: <Minus size={iconSize} />,
      break: <WrapText size={iconSize} />,
      redo: <RotateCw size={iconSize} />,
      undo: <RotateCcw size={iconSize} />,
      save: <ArrowDownToLine size={iconSize} />,
      strike: <Strikethrough size={iconSize} />,
      delete: <X size={iconSize} />,
      add: <Plus size={iconSize} />,
      superscript: <Superscript size={iconSize} />,
      subscript: <Subscript size={iconSize} />,
      checklist: <ListChecks size={iconSize} />,
      image: <ImagePlus size={iconSize} />,
    }[iconName];
  }, [iconName, iconSize]);

  const renderIconSide = useCallback(() => {
    if (iconSide === "right") {
      return (
        <>
          {children}
          {renderIcon()}
        </>
      );
    }
    return (
      <>
        {renderIcon()}
        {children}
      </>
    );
  }, [children, iconSide, renderIcon]);

  const render = useCallback(() => {
    if (!iconName) return children;
    return renderIconSide();
  }, [iconName, children, renderIconSide]);

  const iconSizeAndSide =
    size === "icon"
      ? "w-9 h-9"
      : iconSide === "right"
      ? "flex gap-1 pr-2"
      : "flex gap-1 pl-2";
  const conditional = iconName ? iconSizeAndSide : "";

  return (
    <Button
      {...rest}
      size={size}
      className={cn(conditional, className)}
      variant={variant}
    >
      {render()}
    </Button>
  );
};

export { IconButton, buttonVariants };
