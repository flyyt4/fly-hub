import NavLink from "./NavLink";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { useEffect, useRef, useState } from "react";

type Link = {
  name: string;
  href: string;
  icon: string;
};

const linksComponent: Link[] = [
  {
    name: "Projects",
    href: "/",
    icon: "tabler:home",
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: "tabler:list-check",
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: "tabler:calendar",
  },
  {
    name: "Docs",
    href: "/docs",
    icon: "tabler:book",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "tabler:chart-bar",
  },
  {
    name: "Extensions",
    href: "/extensions",
    icon: "tabler:puzzle",
  },
  {
    name: "Branches",
    href: "/git",
    icon: "tabler:git-branch",
  },
  {
    name: "HTTP Client",
    href: "/http-client",
    icon: "tabler:server",
  },
  {
    name: "Chat",
    href: "/chat",
    icon: "tabler:message",
  },
];

function Nav() {
  const [allLinks, setAllLinks] = useState(linksComponent);
  const [linksRest, setLinksRest] = useState<Link[]>([]);
  const [inViewLinks, setInViewLinks] = useState<Link[]>([]);
  const [linkSize, setLinkSize] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handlerResize = () => {
      if (navRef.current) {
        setLinkSize(navRef.current.offsetWidth);
        const CONFIG_LINK_SIZE = 1;
        const CONFIG_LINK_GAP = 1;
        let maxLinks =
          Math.floor(navRef.current.offsetHeight / navRef.current.offsetWidth) -
          CONFIG_LINK_SIZE -
          CONFIG_LINK_GAP;
        if (allLinks.length > maxLinks) {
          const rest = allLinks.slice(maxLinks);
          setLinksRest(rest);
          maxLinks -= 1;
        }
        const currentInViewLinks = allLinks.slice(0, maxLinks);
        // TODO: Fix duplication of link rest
        for (let i = 0; i < currentInViewLinks.length; i++) {
          const link = currentInViewLinks[i];
          for (let i = 0; i < linksRest.length; i++) {
            const linkRest = linksRest[i];
            if (linkRest.href === link.href) {
              setLinksRest((prev) => prev.filter((l) => l.href !== link.href));
            }
          }
        }

        setInViewLinks(currentInViewLinks);
      }
    };
    handlerResize();
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, [navRef.current]);
  return (
    <nav className="flex flex-col size-full" ref={navRef}>
      {inViewLinks.map((link) => (
        <NavLink
          key={link.name}
          href={link.href}
          name={link.name}
          preventDefault
        >
          <Icon icon={link.icon} />
        </NavLink>
      ))}
      {linksRest.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="size-12">
              <NavLink href="/" name="Additional view" preventDefault>
                <Icon icon="tabler:plus" />
              </NavLink>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right">
            {linksRest.map((link) => (
              <DropdownMenuItem key={link.name}>
                <a href={link.href} className="size-full">
                  {link.name}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="mt-auto size-12">
            <NavLink href="/settings" name="settings" preventDefault>
              <Icon icon="tabler:settings" />
            </NavLink>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Shortcuts</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Themes</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Icon icon="tabler:sun" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem>Colors</DropdownMenuItem>
              <DropdownMenuItem>Icons</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default Nav;
