import { Button } from "@components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useState } from "react";

interface ChatHeaderProps {
  scrollInTop: boolean;
}

function ChatHeader({ scrollInTop }: ChatHeaderProps) {
  const [isOpenChannels, setIsOpenChannels] = useState(false);
  return (
    <div
      className={cn(
        "absolute grid grid-cols-[2.5rem_1fr_2.5rem] w-full h-10 top-0 left-1/2 -translate-x-1/2",
        "pt-1 [&>div>button]:text-sm [&>div>button]:p-1 [&>div>button]:flex",
        "[&>div>button]:justify-center [&>div>button]:items-center data-[in-top=false]:hidden"
      )}
      data-in-top={scrollInTop}
    >
      <div className="flex justify-center items-center">
        <Button variant="ghost" size="icon" className="size-8">
          <Icon icon="tabler:search" />
        </Button>
      </div>
      <div className="flex justify-center items-center p-1">
        <Button
          variant="outline"
          size="icon"
          className="w-full h-8"
          onClick={() => setIsOpenChannels(!isOpenChannels)}
        >
          Chat title
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Button variant="ghost" size="icon" className="size-8">
          <Icon icon="tabler:settings" />
        </Button>
      </div>
    </div>
  );
}

export default ChatHeader;
