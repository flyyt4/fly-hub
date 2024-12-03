"use client";
import type { FC } from "react";
import { useCommandUi } from "./Command";

export interface CommandTriggerProps {
  children: React.ReactNode;
}

const CommandTrigger: FC<CommandTriggerProps> = ({ children }) => {
  const { setIsOpen } = useCommandUi();

  return <div onClick={() => setIsOpen(true)}>{children}</div>;
};

export default CommandTrigger;
