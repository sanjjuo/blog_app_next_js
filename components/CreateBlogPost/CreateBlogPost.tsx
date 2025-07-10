"use client";
import React from "react";
import Tiptap from "../TextEditor/TipTap";
import AddBlogDetails from "../AddBlogDetails/AddBlogDetails";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostSchema } from "@/schemas/blogPostSchema";
import { Controller, useForm } from "react-hook-form";

const CreateBlogPost = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
    //   image: undefined,
      title: "",
      skills: [],
      visibility: "public",
      content: "",
    },
  });

  const formSubmit = () => {
    console.log("form is submitted");
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-5 h-[calc(100vh-600px)] gap-5">
        <div className="col-span-2 h-full">
          <AddBlogDetails
            register={register}
            control={control}
            errors={errors}
          />
        </div>
        <div className="col-span-3 h-full">
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <Tiptap editorContent={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>
      <Button type="submit" className="w-72 rounded-3xl h-12 mt-10">
        Publish post
      </Button>
    </form>
  );
};

export default CreateBlogPost;
