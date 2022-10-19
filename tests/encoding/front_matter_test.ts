/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import "../../testing.ts";
import "../../encoding/front_matter.ts";

import {
  type Article,
  markdown1,
  markdown2,
} from "../fixtures/front_matter.ts";

describe("FrontMatter", () => {
  it("should exist in the global scope", () => {
    assertExists(FrontMatter);
  });

  it("should have an extract method", () => {
    assertExists(FrontMatter.extract);
    assertEquals(typeof FrontMatter.extract, "function");
  });

  it("should extract frontmatter data correctly", () => {
    const data = FrontMatter.extract<Article>(markdown1);
    assertEquals(data.attrs.title, "Article Title");
    assertEquals(data.attrs.author.name, "Nicholas Berlette");
  });

  it("should have a test method", () => {
    assertExists(FrontMatter.test);
    assertEquals(typeof FrontMatter.test, "function");
  });

  it("should test data as expected", () => {
    assert(FrontMatter.test(markdown1));
    assertFalse(FrontMatter.test(markdown2));
  });
});
