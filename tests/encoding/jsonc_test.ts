/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import "../../testing.ts";
import "../../encoding/jsonc.ts";

describe("JSONC", () => {
  it("namespace exists in global scope", () => {
    assertExists(JSONC);
  });

  it(".parse method exists", () => {
    assertExists(JSONC.parse);
    assertEquals(typeof JSONC.parse, "function");
  });

  it(".stringify method exists", () => {
    assertExists(JSONC.stringify);
    assertEquals(typeof JSONC.stringify, "function");
  });
});
