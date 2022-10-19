/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { TOML } from "../deps.ts";
import type { Merge } from "../_internal.ts";

type TOML = Merge<typeof TOML>;

declare global {
  const TOML: TOML;
}

Object.assign(globalThis, {
  TOML: Object.defineProperty({ ...TOML }, Symbol.toStringTag, {
    value: "TOML",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
