/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../testing.ts";
import "./base64.ts";

Deno.test("base64", async (test) => {
  const decoded = "base64_test_string";
  const encoded = "YmFzZTY0X3Rlc3Rfc3RyaW5n";

  await test.step("namespace exists in global scope", () => {
    assertExists(base64);
  });

  await test.step(".encode method exists", () => {
    assertExists(base64.encode);
    assertEquals(typeof base64.encode, "function");
  });

  await test.step(".encode() operates as expected", () => {
    assertEquals(base64.encode(decoded), encoded);
  });

  await test.step(".decode method exists", () => {
    assertExists(base64.decode);
    assertEquals(typeof base64.decode, "function");
  });

  await test.step(".decode() operates as expected", () => {
    assertEquals(base64.decode(encoded), decoded);
  });
});
