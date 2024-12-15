import { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cn } from "src/lib/utils";
import Toolbar from "./Toolbar";

import Lowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

// Built-in Highlight.js Themes
// import "highlight.js/styles/default.css"; // Default
import "highlight.js/styles/atom-one-dark.css"; // Atom One Dark
// import "highlight.js/styles/atom-one-light.css"; // Atom One Light
// import "highlight.js/styles/monokai.css"; // Monokai
// import 'highlight.js/styles/github.css';           // GitHub
// import "highlight.js/styles/github-dark.css"; // GitHub Dark
// import "highlight.js/styles/github-dark-dimmed.css"; // GitHub Dark Dimmed
// import "highlight.js/styles/nord.css"; // Nord
// import "highlight.js/styles/vs2015.css"; // VS Code Dark
// import "highlight.js/styles/vs.css"; // VS Code Light
// import "highlight.js/styles/an-old-hope.css"; // An Old Hope

// Create a Lowlight instance and register languages
const lowlight = createLowlight();
lowlight.register("javascript", javascript);
lowlight.register("html", html);
lowlight.register("css", css);

type NovelEditorProps = {
  content: string;
  onChange: (richText: string) => void;
};

const NovelEditor: FC<NovelEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Lowlight.configure({
        lowlight,
      }),
    ],
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
