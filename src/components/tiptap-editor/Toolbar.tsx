import { Toggle } from "src/shadcn-components/ui/toggle";
import TiptapIcon from "./TiptapIcon";
import { Editor } from "@tiptap/react";
import { FC } from "react";

type ToolbarProps = {
  editor: Editor | null;
};

const Toolbar: FC<ToolbarProps> = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="bg-transparent flex flex-wrap border border-transparent border-b-gray-200 p-2 pb-3">
      <Toggle
        pressed={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <TiptapIcon iconName="bold" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <TiptapIcon iconName="italic" />
      </Toggle>
      <Toggle disabled>
        <TiptapIcon iconName="underline" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
      >
        <TiptapIcon iconName="strike" />
      </Toggle>
      <Toggle disabled>
        <TiptapIcon iconName="superscript" />
      </Toggle>
      <Toggle disabled>
        <TiptapIcon iconName="subscript" />
      </Toggle>
      <Toggle disabled>
        <TiptapIcon iconName="link" />
      </Toggle>
      <Toggle disabled>
        <TiptapIcon iconName="clearMarks" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("paragraph")}
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        <TiptapIcon iconName="paragraph" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 1 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <TiptapIcon iconName="heading1" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <TiptapIcon iconName="heading2" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <TiptapIcon iconName="heading3" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 4 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        <TiptapIcon iconName="heading4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 5 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      >
        <TiptapIcon iconName="heading5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 6 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      >
        <TiptapIcon iconName="heading6" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <TiptapIcon iconName="bulletList" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <TiptapIcon iconName="numberList" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("codeBlock")}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <TiptapIcon iconName="codeBlock" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("code")}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
      >
        <TiptapIcon iconName="code" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("blockquote")}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <TiptapIcon iconName="blockquote" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("horizontalRule")}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <TiptapIcon iconName="minus" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("hardBreak")}
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <TiptapIcon iconName="break" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("redo")}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <TiptapIcon iconName="redo" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("undo")}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <TiptapIcon iconName="undo" />
      </Toggle>
      <Toggle disabled>
        <TiptapIcon iconName="save" />
      </Toggle>
    </div>
  );
};
export default Toolbar;
