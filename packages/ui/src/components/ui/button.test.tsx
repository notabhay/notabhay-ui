import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders text content", () => {
    render(<Button>Ship it</Button>);
    expect(screen.getByRole("button", { name: "Ship it" })).toBeInTheDocument();
  });

  it("applies variant and size data attributes", () => {
    render(
      <Button variant="destructive" size="sm">
        Delete
      </Button>
    );

    const button = screen.getByRole("button", { name: "Delete" });
    expect(button).toHaveAttribute("data-variant", "destructive");
    expect(button).toHaveAttribute("data-size", "sm");
  });
});
