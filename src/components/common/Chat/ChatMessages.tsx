import { Avatar, AvatarFallback } from "@components/ui/avatar";
import { ScrollArea } from "@components/ui/scroll-area";
import { AvatarImage } from "@radix-ui/react-avatar";
import type { Message } from "ai/react";
import { useEffect, useRef } from "react";
import { useEventListener } from "usehooks-ts";

interface ChatMessagesProps {
  messages: Message[];
  scrollToBottom: boolean;
  onScrollTop: () => void;
  onScrollBottom: () => void;
}

function ChatMessages({
  messages,
  scrollToBottom,
  onScrollTop,
  onScrollBottom,
}: ChatMessagesProps) {
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      if (scrollToBottom) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  }, [scrollToBottom]);

  useEventListener(
    "scroll",
    () => {
      if (scrollRef.current) {
        if (
          Math.abs(
            scrollRef.current.scrollHeight -
              scrollRef.current.clientHeight -
              scrollRef.current.scrollTop
          ) < 1
        ) {
          onScrollBottom();
        } else if (scrollRef.current.scrollTop === 0) {
          onScrollTop();
        }
      }
    },
    scrollRef
  );
  return (
    <div
      className="overflow-hidden"
      style={{
        scrollbarWidth: "none",
      }}
    >
      <ul
        className="flex flex-col gap-4 size-full pl-4 text-sm overflow-y-scroll scrollbar-none"
        ref={scrollRef}
      >
        {messages.map((message, index) => (
          <li
            key={message.id}
            className="grid grid-cols-[2.5rem_1fr] gap-2 data-[first=true]:mt-14"
            data-first={index === 0}
          >
            <div className="flex justify-center items-start">
              <Avatar>
                <AvatarImage
                  src={
                    message.role === "user"
                      ? "https://github.com/shadcn.png"
                      : "/favicon.ico"
                  }
                  alt="logo"
                />
                <AvatarFallback>
                  {message.role === "user" ? "U" : "A"}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="pt-2">
              <pre className="size-full whitespace-pre-wrap">
                {message.content}
              </pre>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatMessages;
