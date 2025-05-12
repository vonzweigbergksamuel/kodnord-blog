import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import FormattedDate from "../../src/components/FormattedDate.astro";

describe("FormattedDate", () => {
  it("should render the formatted date component", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(FormattedDate, {
      props: { date: new Date("2023-10-01") },
      slots: {},
    });

    expect(result).toContain("<time");
    expect(result).toContain("</time>");
  });

  it("should format the date correctly", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(FormattedDate, {
      props: { date: new Date("2023-10-01") },
      slots: {},
    });

    expect(result).toContain("Oct 1, 2023");
  });
});
