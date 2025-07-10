"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import HeaderEditor from "./HeaderEditor";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import React from "react";

type TiptapProps = {
  editorContent: string;
  onChange: (content: string) => void;
};

const Tiptap = ({ editorContent, onChange }: TiptapProps) => {
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
    content: editorContent || "<p></p>",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "h-full rounded-xl p-5 focus:!outline-none",
      },
    },
  });

  React.useEffect(() => {
    if (editor && editorContent !== editor.getHTML()) {
      editor.commands.setContent(editorContent || "<p></p>");
    }
  }, [editorContent, editor]);

  return (
    <div className="space-y-5 bg-white p-5 rounded-xl shadow-md h-full">
      <HeaderEditor editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
