// import { useLayoutStore } from "@/store/layout";
import { ResizableHandle, ResizablePanel } from "@components/ui/resizable";
import { useChat } from "ai/react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { $chatOpen, setChatOpen } from "@/stores/layout";

function Chat() {
  const isChatOpen = useStore($chatOpen);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const [scrollInTop, setScrollInTop] = useState(true);
  const [scrollInBottom, setScrollInBottom] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/system/chat",
    onResponse: () => setScrollToBottom(false),
    onFinish: () => setScrollToBottom(true),
  });
  useEffect(() => {
    if (scrollToBottom) {
      setTimeout(() => {
        setScrollToBottom(false);
      }, 100);
    }
  }, [scrollToBottom]);

  if (!isChatOpen) return null;

  return (
    <>
      <ResizableHandle withHandle />
      <ResizablePanel
        minSize={20}
        defaultSize={40}
        order={3}
        collapsible
        id="chat"
        onCollapse={() => setChatOpen(false)}
      >
        <div className="grid grid-rows-[17fr_auto] size-full relative">
          <ChatMessages
            messages={messages}
            scrollToBottom={scrollToBottom}
            onScrollTop={() => {
              setScrollInTop(true);
              setScrollToBottom(false);
            }}
            onScrollBottom={() => {
              setScrollInBottom(true);
              setScrollToBottom(false);
            }}
          />
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <ChatHeader scrollInTop={scrollInTop} />
        </div>
      </ResizablePanel>
    </>
  );
}

export default Chat;
