import { createContext } from "react";

interface ThemeContextInterface {
  themeMode: "light" | "dark";
  setThemeMode: (mode: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);
