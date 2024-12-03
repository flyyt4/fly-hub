import React from "react";
import { cn } from "../../../lib/utils";
import { ResizablePanel, ResizablePanelGroup } from "../../ui/resizable";
import Chat from "../Chat";
import Sidebar from "../Sidebar";
import Tabs from "../Tabs";
import Screen from "../Screen";

interface ContentProps {}

function Content({}: ContentProps) {
  return (
    <ResizablePanelGroup
      className="max-h-[calc(100vh-(2.5rem+1px+1.3rem+1px))]"
      direction="horizontal"
      autoSaveId="layout"
      id="layout"
    >
      <Sidebar />
      <ResizablePanel defaultSize={80} minSize={10} id="content" order={2}>
        <div
          className={cn(
            "size-full grid grid-rows-[calc(2.5rem+1px)_1fr]",
            "max-h-[calc(100vh-(2.5rem+1px+1.3rem+1px))]"
          )}
        >
          <div>
            <Tabs
              defaultTab={{
                icon: "icon:tabler:home",
                name: "Home",
                screenId: "home",
                tooltip: "Home",
              }}
            />
          </div>
          <div className="border-t border-t-background pt-2">
            <Screen />
          </div>
        </div>
      </ResizablePanel>
      <Chat />
    </ResizablePanelGroup>
  );
}

export default Content;
