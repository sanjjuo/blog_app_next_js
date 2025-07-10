import React from "react";
import { technologies } from "../data";
import { X } from "lucide-react";

const SkillsDisplayed = ({ selected }: { selected: number[] }) => {
  const skillsThatSelected = technologies
    .filter((item) => selected.includes(item.id))
    .map((tech) => tech.skill);
  return (
    <div className="flex items-center gap-2">
      {skillsThatSelected.map((data) => (
        <span className="relative bg-red-200 rounded-md py-3 px-6 text-xs tracking-wide font-bold">
          <span className="absolute top-1 right-1">
            <X className="w-4 h-4 cursor-pointer" />
          </span>
          {data}
        </span>
      ))}
    </div>
  );
};

export default SkillsDisplayed;
