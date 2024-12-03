import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { useCommandUi } from "./Command";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "usehooks-ts";
import { Input } from "@components/ui/input";
import { ScrollArea } from "@components/ui/scroll-area";

export interface CommandListProps {
  children: {}[];
}

const CommandList: FC<CommandListProps> = ({ children }) => {
  const [value, setValue] = useState("");
  const { isOpen, setIsOpen } = useCommandUi();
  const commandListRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(commandListRef, () => {
    setIsOpen(false);
  });

  return (
    <>
      {isOpen && (
        <div
          ref={commandListRef}
          className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 border bg-background w-full h-[50vh] rounded-md",
            "p-2 grid grid-rows-[2rem_1fr] gap-1"
          )}
        >
          <div>
            <Input
              type="text"
              className="py-1 px-2 h-full"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <ScrollArea></ScrollArea>
        </div>
      )}
    </>
  );
};

export default CommandList;
