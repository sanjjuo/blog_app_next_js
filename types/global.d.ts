import { Editor } from "@tiptap/react";

interface EditorOption {
  id: number;
  icon: ReactElement;
  action: (editor: Editor) => void;
  isActive: (editor: Editor) => boolean;
}

interface BlogPostFormValues {
  image?: File;
  title: string;
  skills: number[];
  visibility: "public" | "private";
  content: string;
}
