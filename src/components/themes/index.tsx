"use client"
import { useTheme } from "next-themes";
import React from "react";
import { MoonIcon, SunIcon } from "../icons";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === 'dark' ? <SunIcon className='' size={30} /> : <MoonIcon className='' size={30} />}
    </button>
  );
}
