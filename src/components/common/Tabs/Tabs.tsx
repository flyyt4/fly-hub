import Tab from "./Tab";
import { Reorder } from "framer-motion";

import type { TabProps } from "./Tab";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "@nanostores/react";
import { setTabs, $tabs } from "@/stores/tabs";

interface TabsProps {
  defaultTab?: Omit<TabProps, "destroy">;
}

function Tabs({ defaultTab }: TabsProps) {
  const tabs = useStore($tabs);
  useEffect(() => {
    if (defaultTab) {
      const id = uuidv4();
      setTabs([
        {
          ...defaultTab,
          id,
          screenId: defaultTab.screenId,
          destroy: () => setTabs(tabs.filter((t) => t.id !== id)),
        },
      ]);
    }
  }, [defaultTab]);
  return (
    <Reorder.Group
      className="flex flex-nowrap size-full border-b px-4 pt-2"
      axis="x"
      values={tabs}
      onReorder={setTabs}
    >
      {tabs.map((tab) => (
        <Reorder.Item key={tab.name} value={tab}>
          <Tab
            {...tab}
            destroy={() => setTabs(tabs.filter((t) => t.id !== tab.id))}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
  return null;
}

export default Tabs;
