import { Editor } from "@tiptap/react";

interface EditorOption {
  id: number;
  icon: ReactElement;
  action: (editor: Editor) => void;
  isActive: (editor: Editor) => boolean;
}


interface BlogPostFormValues {
  id?: number;
  image?: File;
  title: string;
  skills: string[];
  visibility: "public" | "private";
  content: string;
}
