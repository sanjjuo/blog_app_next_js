import { BlogPostFormValues } from "@/types/global";
import { UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type props = {
  register: UseFormRegister<BlogPostFormValues>;
  error?: string;
};

const TitleInput = ({ register, error }: props) => {
  return (
    <div>
      <Label htmlFor="title">Project Title</Label>
      <Input
        {...register("title")}
        type="text"
        placeholder="Enter your project title"
        className="h-12"
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default TitleInput;
