import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MdArrowDropDown } from "react-icons/md";
import { CiSearch, CiChat1 } from "react-icons/ci";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DropdownMenuLabel = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

const Topbar = () => {
  const [mode, setMode] = useState("Chat Mode");

  const handleChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="bg-accent py-4 px-8 flex items-center w-full fixed">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="ghost"
            size="default"
            className="bg-accent hover:bg-white flex justify-between w-36"
          >
            {mode}
            <MdArrowDropDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} className="w-40">
          <RadioGroup value={mode} onChange={handleChange}>
            <DropdownMenuItem
              className={`flex items-center justify-between cursor-pointer`}
              onClick={() => handleChange("Chat Mode")}
            >
              <div className="flex items-center gap-2">
                <CiChat1 />
                <DropdownMenuLabel htmlFor="chatMode">
                  Chat Mode
                </DropdownMenuLabel>
              </div>
              <RadioGroupItem value="Chat Mode" />
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`flex items-center justify-between cursor-pointer`}
              onClick={() => handleChange("Search Mode")}
            >
              <div className="flex items-center gap-2">
                <CiSearch />
                <DropdownMenuLabel htmlFor="searchMode">
                  Search Mode
                </DropdownMenuLabel>
              </div>
              <RadioGroupItem value="Search Mode" />
            </DropdownMenuItem>
          </RadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Topbar;
