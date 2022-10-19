/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import "../../testing.ts";
import "../../encoding/base64.ts";

describe("base64", () => {
  const decoded = "base64_test_string";
  const encoded = "YmFzZTY0X3Rlc3Rfc3RyaW5n";

  it("namespace exists in global scope", () => {
    assertExists(base64);
  });

  it(".encode method exists", () => {
    assertExists(base64.encode);
    assertEquals(typeof base64.encode, "function");
  });

  it(".encode() operates as expected", () => {
    assertEquals(base64.encode(decoded), encoded);
  });

  it(".decode method exists", () => {
    assertExists(base64.decode);
    assertEquals(typeof base64.decode, "function");
  });

  it(".decode() operates as expected", () => {
    assertEquals(base64.decode(encoded), decoded);
  });
});
