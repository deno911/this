/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../../testing.ts";
import "../../encoding/jsonstream.ts";

Deno.test("JSONStream", async (test) => {
  await test.step("namespace exists in global scope", () => {
    assertExists(JSONStream);
  });

  await test.step(".useParse method exists", () => {
    assertExists(JSONStream.useParse);
    assertEquals(typeof JSONStream.useParse, "function");
  });

  await test.step(".useStringify method exists", () => {
    assertExists(JSONStream.useStringify);
    assertEquals(typeof JSONStream.useStringify, "function");
  });

  await test.step(".useConcat method exists", () => {
    assertExists(JSONStream.useConcat);
    assertEquals(typeof JSONStream.useConcat, "function");
  });
});
