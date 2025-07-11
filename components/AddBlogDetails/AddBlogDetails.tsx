"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Skills from "./Skills/Skills";
import TitleInput from "./TitleInput";
import Visibility from "./Visibility";
import ImageUpload from "./ImageUpload";

const AddBlogDetails = () => {
  return (
    <Card className="bg-white rounded-xl h-full">
      <CardHeader>
        <CardTitle>Enter blog details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ImageUpload />
          <TitleInput />
          <Skills />
          <Visibility />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddBlogDetails;
