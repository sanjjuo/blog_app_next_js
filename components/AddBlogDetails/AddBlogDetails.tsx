"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import ImageUpload from "./ImageUpload";
import Skills from "./Skills/Skills";
import TitleInput from "./TitleInput";
import Visibility from "./Visibility";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { BlogPostFormValues } from "@/types/global";

type props = {
  register: UseFormRegister<BlogPostFormValues>;
  control: Control<BlogPostFormValues>;
  errors?: FieldErrors<BlogPostFormValues>;
};

const AddBlogDetails = ({ register, control, errors }: props) => {
  const [selected, setSelected] = React.useState<number[]>([]);
  return (
    <Card className="bg-white rounded-xl h-full">
      <CardHeader>
        <CardTitle>Enter blog details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ImageUpload />
          <TitleInput register={register} error={errors?.title?.message} />
          <Skills
            selected={selected}
            setSelected={setSelected}
            control={control}
            error={errors?.skills?.message}
          />
          <Visibility register={register} error={errors?.visibility?.message} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddBlogDetails;
