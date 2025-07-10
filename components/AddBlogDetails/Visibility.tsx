import React from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { UseFormRegister } from "react-hook-form";
import { BlogPostFormValues } from "@/types/global";

type props = {
  register: UseFormRegister<BlogPostFormValues>;
  error?: string;
};

const Visibility = ({ register, error }: props) => {
  return (
    <div className="flex items-center gap-10">
      <RadioGroup
        defaultValue="option-one"
        className="flex items-center gap-10"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Private</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Public</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default Visibility;
