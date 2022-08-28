/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import "../testing.ts";
import "./yaml.ts";

Deno.test("YAML", async (test) => {
  await test.step("namespace exists in global scope", () => {
    assertExists(YAML);
  });

  await test.step(".parse method exists", () => {
    assertExists(YAML.parse);
    assertEquals(typeof YAML.parse, "function");
  });

  await test.step(".parseAll method exists", () => {
    assertExists(YAML.parseAll);
    assertEquals(typeof YAML.parseAll, "function");
  });

  await test.step(".stringify method exists", () => {
    assertExists(YAML.stringify);
    assertEquals(typeof YAML.stringify, "function");
  });

  await test.step(".CORE_SCHEMA exists", () => {
    assertExists(YAML.CORE_SCHEMA);
  });

  await test.step(".EXTENDED_SCHEMA exists", () => {
    assertExists(YAML.EXTENDED_SCHEMA);
  });

  await test.step(".JSON_SCHEMA exists", () => {
    assertExists(YAML.JSON_SCHEMA);
  });

  await test.step(".DEFAULT_SCHEMA exists", () => {
    assertExists(YAML.DEFAULT_SCHEMA);
  });

  await test.step(".FAILSAFE_SCHEMA exists", () => {
    assertExists(YAML.FAILSAFE_SCHEMA);
  });

});
