/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../../testing.ts";
import "../../encoding/hex.ts";

describe("Hex", () => {
  let encoded: Uint8Array, decoded: Uint8Array;

  beforeAll(() => {
    decoded = new Uint8Array([116, 101, 115, 116]);
    encoded = new Uint8Array([55, 52, 54, 53, 55, 51, 55, 52]);
  });

  it("should exist in the global scope", () => {
    assertExists(Hex);
  });

  it("should have an encode method", () => {
    assertExists(Hex.encode);
    assertEquals(typeof Hex.encode, "function");
    assertEquals(Hex.encode(decoded), encoded);
  });

  it("should have a decode method", () => {
    assertExists(Hex.decode);
    assertEquals(typeof Hex.decode, "function");
    assertEquals(Hex.decode(encoded), decoded);
  });
});
