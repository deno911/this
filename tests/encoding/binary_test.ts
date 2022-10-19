/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import "../../testing.ts";
import "../../encoding/binary.ts";

describe("binary", () => {
  it("exists in global scope", () => assertExists(binary));
  it("should have a readExact method", () => assertExists(binary.readExact));
  it("should have a readVarbig method", () => assertExists(binary.readVarbig));
  it("should have a readVarnum method", () => assertExists(binary.readVarnum));
  it("should have a writeVarbig method", () =>
    assertExists(binary.writeVarbig));
  it("should have a writeVarnum method", () =>
    assertExists(binary.writeVarnum));
  it("should have a getNBytes method", () => assertExists(binary.getNBytes));
  it("should have a varbig method", () => assertExists(binary.varbig));
});
