import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ImageUpload() {
  return (
    <div className="w-full h-auto">
      <Label htmlFor="picture">Project Image</Label>
      <Input
        id="picture"
        type="file"
        className="flex items-center file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 h-full rounded-md py-3"
      />
    </div>
  );
}
