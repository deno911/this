/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import "../../testing.ts";
import "../../encoding/csv.ts";

Deno.test("CSV exists in global scope", () => {
  assertExists(CSV);
});
