"use client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { SetStateAction } from "react";
import { Input } from "../../ui/input";
import { technologies } from "../data";

const SkillsDropdown = ({
  selected,
  setSelected,
}: {
  selected: number[];
  setSelected: React.Dispatch<SetStateAction<number[]>>;
}) => {
  const toggleSkill = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="bg-black text-white p-3 rounded-md w-full">
        Technologies
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80 h-80 overflow-auto">
        <div className="p-3 sticky top-0 bg-white z-10">
          <Input placeholder="Search skills" />
        </div>
        <DropdownMenuSeparator />
        {technologies.map((tech) => (
          <DropdownMenuCheckboxItem
            key={tech.id}
            checked={selected.includes(tech.id)}
            onCheckedChange={() => toggleSkill(tech.id)}
          >
            {tech.skill}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SkillsDropdown;
