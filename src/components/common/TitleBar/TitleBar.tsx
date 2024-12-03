import { Button } from "@components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

import Command, { CommandList, CommandTrigger } from "./Command";
import ToggleChat from "./buttons/ToggleChat";
import ToggleSidebar from "./buttons/ToggleSidebar";

function TitleBar() {
  return (
    <div className="size-full flex flex-row flex-nowrap py-1">
      <div className="w-[calc(20%+2.5rem)] grid grid-cols-[3rem_1fr]">
        <div className="grid place-content-center">
          <img
            width={24}
            height={24}
            src="/favicon.ico"
            alt="logo"
            className="max-w-6 max-h-6"
          />
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-sm [&>button]:px-2 [&>button]:py-1 [&>button]:h-6",
            "[&>button]:flex-grow"
          )}
        >
          <Button variant="ghost">File</Button>
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost">View</Button>
          <Button variant="ghost">Go</Button>
          <Button variant="ghost">...</Button>
        </div>
      </div>
      <div className="grid flex-[1] grid-cols-[1fr_5fr_1fr] gap-2">
        <div
          className={cn(
            "flex justify-end items-center flex-row [&>button]:text-sm [&>button]:p-1 [&>button]:h-6",
            "gap-1 text-lg"
          )}
        >
          <Button variant="ghost">
            <Icon icon="tabler:arrow-left" />
          </Button>
          <Button variant="ghost">
            <Icon icon="tabler:arrow-right" />
          </Button>
        </div>
        <div className="grid content-center relative">
          <Command>
            <CommandTrigger>
              <Button className="size-full py-1" variant="outline">
                <Icon icon="tabler:search" />
                <span>Search</span>
              </Button>
            </CommandTrigger>
            <CommandList>{[]}</CommandList>
          </Command>
        </div>
        <div></div>
      </div>
      <div
        className={cn(
          "flex items-center pr-3 gap-1 [&>button]:text-sm [&>button]:p-1 [&>button]:h-6",
          "[&>button]:flex-grow text-lg [&>button]:w-6 [&>button]:flex [&>button]:justify-center",
          "[&>button]:items-center"
        )}
      >
        <ToggleSidebar />
        <ToggleChat />
        <Button variant="ghost">
          <Icon icon="tabler:layout-board-split" />
        </Button>
        <Button variant="ghost">
          <Icon icon="tabler:settings" />
        </Button>
      </div>
    </div>
  );
}

export default TitleBar;
