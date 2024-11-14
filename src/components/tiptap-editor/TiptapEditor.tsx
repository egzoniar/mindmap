import { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cn } from "src/lib/utils";
import Toolbar from "./Toolbar";

type NovelEditorProps = {
  description: string;
  onChange: (richText: string) => void;
};

const NovelEditor: FC<NovelEditorProps> = ({ 
  description, 
  onChange
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description,
    editorProps: {
      attributes: {
        class: cn("focus-visible:outline-none p-2"),
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className={cn(
      "editor flex flex-col justify-stretch gap-6 border border-gray-300 shadow-sm rounded-md p-2.5",
      "focus-within:ring-2 focus-within:ring-ring focus-within:border-transparent",
    )}>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default NovelEditor;