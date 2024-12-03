import { $openSidebar, setOpenSidebar } from "@/stores/layout";
import { $sidebarScreen, setSidebarScreen } from "@/stores/screens";
import { ResizableHandle, ResizablePanel } from "@components/ui/resizable";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  const sidebarScreen = useStore($sidebarScreen);
  const isOpenSidebar = useStore($openSidebar);
  if (!isOpenSidebar) return null;
  useEffect(() => {
    if (sidebarScreen.provider === "system") {
      setSidebarScreen({
        provider: "system",
        ref: `system:screens:${
          window.location.pathname === "/"
            ? "home"
            : window.location.pathname.replaceAll("/", "")
        }:sidebar`,
      });
    }
  }, []);
  return (
    <>
      <ResizablePanel
        id="sidebar"
        order={1}
        defaultSize={20}
        minSize={10}
        collapsible
        onCollapse={() => setOpenSidebar(false)}
        onExpand={() => setOpenSidebar(true)}
      >
        <iframe
          className="size-full"
          sandbox="allow-scripts allow-same-origin"
          src={`/api/${sidebarScreen.ref.split(":").join("/")}`}
        ></iframe>
      </ResizablePanel>
      <ResizableHandle withHandle />
    </>
  );
}

export default Sidebar;
