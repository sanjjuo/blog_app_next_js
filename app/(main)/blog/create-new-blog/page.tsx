import CreateBlogPost from "@/components/CreateBlogPost/CreateBlogPost";
import Tiptap from "@/components/TextEditor/TipTap";
import React from "react";

const CreateNewBlogPage = () => {
  return (
    <div className="py-10 lg:py-20">
      <h1 className="text-center text-4xl font-bold">Create a blog post</h1>
      <div className="mt-10">
        <CreateBlogPost />
      </div>
    </div>
  );
};

export default CreateNewBlogPage;
