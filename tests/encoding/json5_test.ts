/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import "../../testing.ts";
import "../../encoding/json5.ts";

describe("JSON5", () => {
  it("namespace exists in global scope", () => {
    assertExists(JSON5);
  });

  it(".parse method exists", () => {
    assertExists(JSON5.parse);
    assertEquals(typeof JSON5.parse, "function");
  });

  it(".stringify method exists", () => {
    assertExists(JSON5.stringify);
    assertEquals(typeof JSON5.stringify, "function");
  });

  it(".require method exists", () => {
    assertExists(JSON5.require);
    assertEquals(typeof JSON5.require, "function");
  });

  it(".requireAsync method exists", () => {
    assertExists(JSON5.requireAsync);
    assertEquals(typeof JSON5.requireAsync, "function");
  });
});
