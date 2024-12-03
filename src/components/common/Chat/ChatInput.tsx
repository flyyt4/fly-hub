import { Button } from "@components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import TextareaAutosize from "react-textarea-autosize";
import type { ChatRequestOptions } from "ai";
import { useState } from "react";
import { useEventListener } from "usehooks-ts";

interface ChatInputProps {
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  input: string;
}

function ChatInput({ handleInputChange, handleSubmit, input }: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handlerSubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  useEventListener("keydown", handlerSubmit);
  return (
    <div className="flex justify-center items-center p-2 min-h-14">
      <div
        className={cn(
          "flex items-center px-2 gap-2",
          "border bg-background rounded-md size-full [&>button]:text-sm",
          "[&>button]:p-1 [&>button]:size-6 text-lg",
          "[&>button]:flex [&>button]:justify-center [&>button]:items-center"
        )}
      >
        <Button size="icon" variant="outline">
          <Icon icon="tabler:plus" />
        </Button>
        <TextareaAutosize
          value={input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
          className="w-full bg-transparent text-sm outline-none resize-none py-2"
          minRows={1}
          maxRows={5}
          placeholder="Type a message"
        />
      </div>
    </div>
  );
}

export default ChatInput;
