"use client";
// import { useDarkMode } from "@/store/darkMode";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  className?: string;
}

function Body({ children, className }: ThemeProviderProps) {
  // const { darkMode, enable, setDarkModeNode, disable } = useDarkMode(
  //   (state) => state
  // );
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const ref = useRef<HTMLBodyElement>(null);
  // useEffect(() => {
  //   const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   setIsDarkMode(isDark);
  // }, []);
  // useEffect(() => {
  //   isDarkMode ? enable() : disable();
  // }, [isDarkMode]);
  // useEffect(() => {
  //   setDarkModeNode(ref);
  // }, [ref]);
  const isDarkMode = true;
  return (
    <body className={cn(isDarkMode ? "dark" : "", className)}>{children}</body>
  );
}

export default Body;
