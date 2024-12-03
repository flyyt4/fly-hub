import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  isCurrent?: boolean;
  children: React.ReactNode;
  name: string;
  href: string;
  shortcut?: string;
  preventDefault?: boolean;
}
function NavLink({
  isCurrent = false,
  children,
  name,
  href,
  shortcut,
  preventDefault = false,
}: NavLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            className={cn(
              "flex size-12 overflow-hidden justify-center items-center text-2xl"
            )}
            onClick={preventDefault ? (e) => e.preventDefault() : undefined}
          >
            <div
              className={cn(
                "bg-white size-[2rem] text-background flex justify-center items-center rounded-md",
                "data-[active=true]:bg-primary data-[active=true]:text-foreground"
              )}
              data-active={isCurrent}
            >
              {children}
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default NavLink;
