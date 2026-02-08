import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { Command } from "cmdk";
import {
  Home,
  LayoutDashboard,
  Component,
  LogIn,
  UserPlus,
  Search,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "@notabhay-ui/ui";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runCommand = useCallback(
    (command: () => void) => {
      setOpen(false);
      command();
    },
    []
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        role="button"
        tabIndex={-1}
        aria-label="Close command palette"
      />
      <div className="fixed top-[20%] left-1/2 w-full max-w-lg -translate-x-1/2">
        <div className="neon-card-accent rounded-lg border bg-card shadow-lg neon-glow-sm overflow-hidden">
          <Command
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
              <Command.Input
                placeholder="Type a command or search..."
                className="h-11 py-3"
              />
            </div>
            <Command.List className="max-h-80 p-2">
              <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigation">
                <Command.Item
                  onSelect={() => runCommand(() => navigate("/"))}
                >
                  <Home className="h-4 w-4 text-muted-foreground" />
                  <span>Home</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => navigate("/dashboard"))}
                >
                  <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                  <span>Dashboard</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => navigate("/components"))}
                >
                  <Component className="h-4 w-4 text-muted-foreground" />
                  <span>Components</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => navigate("/login"))}
                >
                  <LogIn className="h-4 w-4 text-muted-foreground" />
                  <span>Login</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => navigate("/signup"))}
                >
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                  <span>Sign Up</span>
                </Command.Item>
              </Command.Group>

              <Command.Separator />

              <Command.Group heading="Theme">
                <Command.Item
                  onSelect={() =>
                    runCommand(() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    )
                  }
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Moon className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span>
                    Switch to {resolvedTheme === "dark" ? "Light" : "Dark"} Mode
                  </span>
                </Command.Item>
              </Command.Group>
            </Command.List>

            <div className="border-t px-3 py-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>Navigate with arrow keys</span>
              <span>
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-[10px]">
                  ESC
                </kbd>{" "}
                to close
              </span>
            </div>
          </Command>
        </div>
      </div>
    </div>
  );
}
