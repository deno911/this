/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../testing.ts";
import "./toml.ts";

Deno.test("TOML", async (test) => {
  await test.step("namespace exists in global scope", () => {
    assertExists(TOML);
  });

  await test.step(".parse method exists", () => {
    assertExists(TOML.parse);
    assertEquals(typeof TOML.parse, "function");
  });

  await test.step(".stringify method exists", () => {
    assertExists(TOML.stringify);
    assertEquals(typeof TOML.stringify, "function");
  });

});
