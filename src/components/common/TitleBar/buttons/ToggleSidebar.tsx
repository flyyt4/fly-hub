import { $openSidebar, toggleSidebar } from "@/stores/layout";
import { Button } from "@components/ui/button";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useStore } from "@nanostores/react";

function ToggleSidebar() {
  const isSidebarOpen = useStore($openSidebar);
  return (
    <Button variant="ghost" onClick={() => toggleSidebar()}>
      <Icon
        icon={
          isSidebarOpen
            ? "tabler:layout-sidebar-filled"
            : "tabler:layout-sidebar"
        }
      />
    </Button>
  );
}

export default ToggleSidebar;
