/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../testing.ts";
import "./hex.ts";

Deno.test("hex", async (test) => {
  // new TextEncoder().encode("test");
  const decoded = new Uint8Array([116, 101, 115, 116]);
  const encoded = new Uint8Array([55, 52, 54, 53, 55, 51, 55, 52]);

  await test.step("namespace exists in global scope", () => {
    assertExists(hex);
  });

  await test.step(".encode method exists", () => {
    assertExists(hex.encode);
    assertEquals(typeof hex.encode, "function");
  });

  await test.step(".encode() operates as expected", () => {
    assertEquals(hex.encode(decoded), encoded);
  });

  await test.step(".decode method exists", () => {
    assertExists(hex.decode);
    assertEquals(typeof hex.decode, "function");
  });

  await test.step(".decode() operates as expected", () => {
    assertEquals(hex.decode(encoded), decoded);
  });
});
