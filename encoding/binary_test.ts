/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../testing.ts";
import "./binary.ts";

Deno.test("binary exists in global scope", () => {
  assertExists(binary);
});
