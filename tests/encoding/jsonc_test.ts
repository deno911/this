/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../../testing.ts";
import "../../encoding/jsonc.ts";

Deno.test("JSONC", async (test) => {
  await test.step("namespace exists in global scope", () => {
    assertExists(JSONC);
  });

  await test.step(".parse method exists", () => {
    assertExists(JSONC.parse);
    assertEquals(typeof JSONC.parse, "function");
  });

  await test.step(".stringify method exists", () => {
    assertExists(JSONC.stringify);
    assertEquals(typeof JSONC.stringify, "function");
  });
});
