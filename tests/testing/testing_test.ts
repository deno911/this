/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.window" />

import "../../testing/all.ts";

Deno.test("URL Test", () => {
  const url = new URL("./this@0.0.1/mod.ts", "https://deno.land/x/");
  assertEquals(url.href, "https://deno.land/x/this@0.0.1/mod.ts");
});

describe("Users Map", () => {
  const users = new Map();
  it("is initially empty", () => assertEquals(users.size, 0));
  it("is writeable", () => {
    users.set("key", "value");
    assertEquals(users.size, 1);
  });
  it("is readable", () => assertArrayIncludes([...users.values()], ["value"]));
});

describe("fc (fast-check)", () => {
  it("exists in global scope", () => assertExists(fc));
});
