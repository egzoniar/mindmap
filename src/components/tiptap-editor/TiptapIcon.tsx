import { useCallback } from "react";
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
  ArrowDown,
  CircleAlert,
  Bird,
} from "lucide-react";

interface IconProps {
  iconName: string;
  iconSize?: number;
}

const TiptapIcon = ({ iconName, iconSize = 15 }: IconProps) => {
  const renderIcon = useCallback(() => {
    return {
      bold: <Bold size={iconSize} />,
      underline: <Underline size={iconSize} />,
      italic: <Italic size={iconSize} />,
      code: <Code size={iconSize} />,
      link: <Link size={iconSize} />,
      clearMarks: <Eraser size={iconSize} />,
      paragraph: <Pilcrow size={iconSize} />,
      heading1: <Heading1 size={iconSize} />,
      heading2: <Heading2 size={iconSize} />,
      heading3: <Heading3 size={iconSize} />,
      heading4: <Heading4 size={iconSize} />,
      heading5: <Heading5 size={iconSize} />,
      heading6: <Heading6 size={iconSize} />,
      bulletList: <List size={iconSize} />,
      numberList: <ListOrdered size={iconSize} />,
      codeBlock: <Braces size={iconSize} />,
      blockquote: <Quote size={iconSize} />,
      minus: <Minus size={iconSize} />,
      break: <WrapText size={iconSize} />,
      redo: <RotateCw size={iconSize} />,
      undo: <RotateCcw size={iconSize} />,
      save: <ArrowDownToLine size={iconSize} />,
      strike: <Strikethrough size={iconSize} />,
      delete: <X size={iconSize} />,
      add: <Plus size={iconSize} />,
      superscript: <Superscript size={iconSize} />,
      subscript: <Subscript size={iconSize} />,
      todo: <ListChecks size={iconSize} />,
      addImage: <ImagePlus size={iconSize} />,
      arrowDown: <ArrowDown size={iconSize} />,
      admonition: <CircleAlert size={iconSize} />,
      sandpack: <Bird size={iconSize} />,
    }[iconName];
  }, [iconName, iconSize]);

  return renderIcon() || <Bold size={iconSize} />;
};
export default TiptapIcon;
