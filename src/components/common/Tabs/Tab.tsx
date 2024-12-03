// import { useScreenStore } from "@/store/screens";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

export interface TabProps {
  name: string;
  icon: string;
  tooltip: string;
  destroy: () => void;
  screenId: string;
}

function Tab({ name, icon, destroy, screenId }: TabProps) {
  const tabRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(tabRef);

  return (
    <div
      className={cn(
        "flex flex-nowrap h-full px-2 gap-2 bg-background border-x border-t relative rounded-t-md",
        "before:content-[''] before:absolute before:bottom-[-1px] before:left-0 before:w-full",
        "before:h-[1px] before:bg-background cursor-pointer"
      )}
      ref={tabRef}
    >
      <div className="grid place-content-center w-4">
        {icon.startsWith("icon:") ? (
          <Icon icon={icon.slice(4)} />
        ) : (
          <img src={icon as string} />
        )}
      </div>
      <div className="flex items-center flex-[1]">
        <span>{name}</span>
      </div>
      <div className="w-4">
        <button
          className="size-full grid content-center text-transparent data-[hover=true]:text-foreground"
          data-hover={isHover}
          onClick={destroy}
        >
          <Icon icon="tabler:x" />
        </button>
      </div>
    </div>
  );
}

export default Tab;
