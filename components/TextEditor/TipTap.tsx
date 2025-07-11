"use client";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import HeaderEditor from "./HeaderEditor";

type TiptapProps = {
  editorContent: string;
  onChange: (content: string) => void;
  errors?: string;
};

const Tiptap = ({ editorContent, onChange, errors }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start typing your content here...",
        emptyEditorClass: "is-editor-empty",
      }),
    ],
    content: editorContent || "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const div = document.createElement("div");
      div.innerHTML = html;
      const textOnly = div.textContent || "";
      onChange(textOnly);
    },
    editorProps: {
      attributes: {
        class: "h-full rounded-xl p-5 focus:!outline-none",
      },
    },
    immediatelyRender: false,
  });

  React.useEffect(() => {
    if (editor && editorContent !== editor.getHTML()) {
      editor.commands.setContent(editorContent || "<p></p>");
    }
  }, [editorContent, editor]);

  return (
    <div className="space-y-5 bg-white p-5 rounded-xl shadow-md h-full">
      <HeaderEditor editor={editor} />
      {errors && <div className="text-red-500">{errors}</div>}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
