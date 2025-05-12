import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Header from "../../src/components/Header.astro";

describe("Header", () => {
  it("should render the header component", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header, {
      props: {},
      slots: {},
    });

    expect(result).toContain("<header");
    expect(result).toContain("</header>");
  });

  it("should display the correct title", () => {
    // Test implementation goes here
    expect(true).toBe(true);
  });

  it("should have a working navigation menu", () => {
    // Test implementation goes here
    expect(true).toBe(true);
  });
});
