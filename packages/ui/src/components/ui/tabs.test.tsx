import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs", () => {
  it("respects default active tab value", () => {
    render(
      <Tabs defaultValue="logs">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Overview content</TabsContent>
        <TabsContent value="logs">Log content</TabsContent>
      </Tabs>
    );

    const overviewTab = screen.getByRole("tab", { name: "Overview" });
    const logsTab = screen.getByRole("tab", { name: "Logs" });

    expect(logsTab).toHaveAttribute("data-state", "active");
    expect(overviewTab).toHaveAttribute("data-state", "inactive");
    expect(screen.getByText("Log content")).toBeInTheDocument();
  });
});
