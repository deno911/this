/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../../testing.ts";
import "../../encoding/front_matter.ts";

const md2 =
  `# Article Title\n\nSome awesome content here fam\n\n---\n\nMIT © [Nicholas Berlette](https://github.com/nberlette). All rights reserved.`;

const md1 = `---
title: "Article Title"
author:
  name: Nicholas Berlette
  email: nick@berlette.com
  url: https://github.com/nberlette
date: 2022-08-28T12:00:00-0700Z
---

${md2}`;

/**
 * Describes the shape of our expected front matter data.
 */
interface Article {
  title: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  date: string;
}

Deno.test("front_matter", async (test) => {
  await test.step("namespace exists in global scope", () => {
    assertExists(front_matter);
  });

  await test.step(".extract method exists", () => {
    assertExists(front_matter.extract);
    assertEquals(typeof front_matter.extract, "function");
  });

  await test.step(".extract() operates as expected", () => {
    const data = front_matter.extract<Article>(md1);
    assertEquals(data.attrs.title, "Article Title");
    assertEquals(data.attrs.author.name, "Nicholas Berlette");
  });

  await test.step(".test method exists", () => {
    assertExists(front_matter.test);
    assertEquals(typeof front_matter.test, "function");
  });

  await test.step(".test() operates as expected", () => {
    assert(front_matter.test(md1));
    assertFalse(front_matter.test(md2));
  });
});
