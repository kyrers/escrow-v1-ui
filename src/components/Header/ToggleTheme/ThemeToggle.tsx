import { Button } from "@kleros/ui-components-library";
import { useTheme } from "../../../hooks/useTheme";

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onPress={toggleTheme}
      variant="secondary"
      text={theme === "light" ? "🌙" : "☀️"}
    />
  );
}
