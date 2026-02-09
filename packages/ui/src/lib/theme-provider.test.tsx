import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeProvider, useTheme } from "./theme-provider";

function ThemeConsumer() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <p data-testid="theme-value">{resolvedTheme}</p>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>Toggle</button>
    </div>
  );
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    const storage = new Map<string, string>();
    const localStorageMock = {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value);
      },
      removeItem: (key: string) => {
        storage.delete(key);
      },
      clear: () => {
        storage.clear();
      },
    };

    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      configurable: true,
    });

    document.documentElement.className = "";
  });

  it("applies dark theme by default", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("switches and persists theme", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle" }));

    expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(window.localStorage.getItem("notabhay-ui-theme")).toBe("light");
  });
});
