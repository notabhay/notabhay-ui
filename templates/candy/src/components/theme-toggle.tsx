import { Moon, Sun } from "lucide-react";
import { useTheme, Button } from "@notabhay-ui/ui";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="rounded-full w-9 h-9 p-0"
      >
        {resolvedTheme === "dark" ? (
          <Sun className="h-4 w-4 text-accent" />
        ) : (
          <Moon className="h-4 w-4 text-primary" />
        )}
      </Button>
    </motion.div>
  );
}
