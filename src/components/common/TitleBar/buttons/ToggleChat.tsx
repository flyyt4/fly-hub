import { $chatOpen, toggleChat } from "@/stores/layout";
import { Button } from "@components/ui/button";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useStore } from "@nanostores/react";

function ToggleChat() {
  const isChatOpen = useStore($chatOpen);
  return (
    <Button variant="ghost" onClick={() => toggleChat()}>
      <Icon
        icon={
          isChatOpen
            ? "tabler:layout-sidebar-right-filled"
            : "tabler:layout-sidebar-right"
        }
      />
    </Button>
  );
}

export default ToggleChat;
