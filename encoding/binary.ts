/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { binary } from "../deps.ts";
import type { Merge } from "../_internal.ts";

type binary = Merge<typeof binary>;

declare global {
  const binary: binary;
}

Object.assign(globalThis, {
  binary: Object.defineProperty({ ...binary }, Symbol.toStringTag, {
    value: "binary",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
