/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import "../../testing.ts";
import "../../encoding/base64url.ts";

describe("base64url", () => {
  const decoded = "base64url_test_string";
  const encoded = "YmFzZTY0dXJsX3Rlc3Rfc3RyaW5n";

  it("namespace exists in global scope", () => {
    assertExists(base64url);
  });

  it(".encode method exists", () => {
    assertExists(base64url.encode);
    assertEquals(typeof base64url.encode, "function");
  });

  it(".encode() operates as expected", () => {
    assertEquals(base64url.encode(decoded), encoded);
  });

  it(".decode method exists", () => {
    assertExists(base64url.decode);
    assertEquals(typeof base64url.decode, "function");
  });

  it(".decode() operates as expected", () => {
    assertEquals(base64url.decode(encoded), decoded);
  });
});
