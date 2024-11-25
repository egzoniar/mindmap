import { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cn } from "src/lib/utils";
import Toolbar from "./Toolbar";
import { Separator } from "src/shadcn-components/ui/separator";

type NovelEditorProps = {
  content: string;
  onChange: (richText: string) => void;
};

const NovelEditor: FC<NovelEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class: cn("focus-visible:outline-none p-2"),
      },
    },
    onUpdate({ editor, ...rest }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div
      className={cn(
        "editor flex flex-col justify-stretch border border-gray-300 shadow-sm rounded-md"
      )}
    >
      <Toolbar editor={editor} />
      <div className="max-h-96 overflow-scroll">
        <div className="p-2">
          <EditorContent
            editor={editor}
            onKeyDown={(event) => {
              if (event.key === "Enter" && event.shiftKey) {
                // Shift + Enter: Insert a break
                event.preventDefault();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NovelEditor;
