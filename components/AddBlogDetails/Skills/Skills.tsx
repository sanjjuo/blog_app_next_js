import React, { SetStateAction } from "react";
import SkillsDropdown from "./SkillsDropdown";
import SkillsDisplayed from "./SkillsDisplayed";
import { Control } from "react-hook-form";
import { BlogPostFormValues } from "@/types/global";

const Skills = ({
  selected,
  setSelected,
  control,
  error,
}: {
  selected: number[];
  setSelected: React.Dispatch<SetStateAction<number[]>>;
  control: Control<BlogPostFormValues>;
  error?: string;
}) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-2">
        <SkillsDropdown selected={selected} setSelected={setSelected} />
      </div>
      <div className="col-span-3">
        <SkillsDisplayed selected={selected} />
      </div>
    </div>
  );
};

export default Skills;
