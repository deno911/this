/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../../testing.ts";
import "../../encoding/json5.ts";

Deno.test("JSON5", async (test) => {
  await test.step("namespace exists in global scope", () => {
    assertExists(JSON5);
  });

  await test.step(".parse method exists", () => {
    assertExists(JSON5.parse);
    assertEquals(typeof JSON5.parse, "function");
  });

  await test.step(".stringify method exists", () => {
    assertExists(JSON5.stringify);
    assertEquals(typeof JSON5.stringify, "function");
  });

  await test.step(".require method exists", () => {
    assertExists(JSON5.require);
    assertEquals(typeof JSON5.require, "function");
  });

  await test.step(".requireAsync method exists", () => {
    assertExists(JSON5.requireAsync);
    assertEquals(typeof JSON5.requireAsync, "function");
  });
});
