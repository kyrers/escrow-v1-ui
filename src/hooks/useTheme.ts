import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
