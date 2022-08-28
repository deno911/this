/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../testing.ts";
import "./base64url.ts";

Deno.test("base64url", async (test) => {
  const decoded = "base64url_test_string";
  const encoded = "YmFzZTY0dXJsX3Rlc3Rfc3RyaW5n";

  await test.step("namespace exists in global scope", () => {
    assertExists(base64url);
  });

  await test.step(".encode method exists", () => {
    assertExists(base64url.encode);
    assertEquals(typeof base64url.encode, "function");
  });

  await test.step(".encode() operates as expected", () => {
    assertEquals(base64url.encode(decoded), encoded);
  });

  await test.step(".decode method exists", () => {
    assertExists(base64url.decode);
    assertEquals(typeof base64url.decode, "function");
  });

  await test.step(".decode() operates as expected", () => {
    assertEquals(base64url.decode(encoded), decoded);
  });
});
