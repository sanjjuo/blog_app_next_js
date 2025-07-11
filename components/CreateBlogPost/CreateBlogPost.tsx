"use client";

import React from "react";
import Tiptap from "../TextEditor/TipTap";
import AddBlogDetails from "../AddBlogDetails/AddBlogDetails";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostSchema } from "@/schemas/blogPostSchema";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAddBlog } from "@/services/reactQueryService";

// Infer type from schema
type BlogPostFormData = z.infer<typeof blogPostSchema>;

const CreateBlogPost = () => {
  const form = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      skills: [],
      visibility: "private",
      content: "",
      image: undefined as unknown as File,
    },
  });

  const { handleSubmit, control } = form;
  const router = useRouter();
  const { mutate } = useAddBlog();

  const formSubmit = (data: BlogPostFormData) => {
    console.log("Form data:", data);
    router.push("/blog");
    mutate(data, {
      onSuccess: () => {
        toast.success("post is created");
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-5 h-auto gap-5">
          <div className="col-span-2 h-full">
            <AddBlogDetails />
          </div>
          <div className="col-span-3 h-full">
            <Controller
              name="content"
              control={control}
              render={({ field, fieldState }) => (
                <Tiptap
                  editorContent={field.value}
                  onChange={field.onChange}
                  errors={fieldState?.error?.message}
                />
              )}
            />
          </div>
        </div>
        <Button type="submit" className="w-72 rounded-3xl h-12 mt-10">
          Publish post
        </Button>
      </form>
    </Form>
  );
};

export default CreateBlogPost;
