import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe("Dialog", () => {
  it("opens and closes from trigger and close button", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deploy</DialogTitle>
            <DialogDescription>Deploy changes now</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open dialog" }));
    expect(await screen.findByRole("heading", { name: "Deploy" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("heading", { name: "Deploy" })).not.toBeInTheDocument();
  });
});
