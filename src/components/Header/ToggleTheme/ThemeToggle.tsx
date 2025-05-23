import Moon from "assets/moon.svg?react";
import Sun from "assets/sun.svg?react";
import { IconButton } from "components/common/IconButton";
import { useTheme } from "hooks/useTheme";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onPress={toggleTheme}
      small
      icon={theme === "light" ? <Moon /> : <Sun />}
      text=""
    />
  );
}
