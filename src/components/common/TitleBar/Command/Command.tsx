import { createContext, isValidElement, useContext, useState } from "react";
import CommandTrigger from "./CommandTrigger";
import CommandList from "./CommandList";

interface CommandProps {
  children: [React.ReactNode, React.ReactNode];
}

const CommandContext = createContext({
  isOpen: false,
  setIsOpen: (open: boolean | ((open: boolean) => boolean)) => {},
});

function Command({ children }: CommandProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CommandContext.Provider value={{ isOpen, setIsOpen }}>
      {children[0]}
      {children[1]}
    </CommandContext.Provider>
  );
}

export const useCommandUi = () => {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error("useCommandUi must be used within a Command");
  }
  return context;
};

export default Command;
