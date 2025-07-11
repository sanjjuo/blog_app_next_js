import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export default function ImageUpload() {
  const { control } = useFormContext();

  return (
    <div className="w-full h-auto">
      <FormField
        control={control}
        name="image"
        render={({ field: { onChange, ref } }) => (
          <FormItem>
            <FormLabel>Project Image</FormLabel>
            <FormControl>
              <Input
                id="picture"
                type="file"
                ref={ref}
                onChange={(e) => {
                  onChange(e.target.files?.[0]); // save File object
                }}
                className="flex items-center file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 h-full rounded-md py-3"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
