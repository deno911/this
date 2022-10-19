/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { hex as Hex } from "../deps.ts";
import type { Merge } from "../_internal.ts";

type Hex = Merge<typeof Hex>;

declare global {
  const Hex: Hex;
}

Object.assign(globalThis, {
  Hex: Object.defineProperty({ ...Hex }, Symbol.toStringTag, {
    value: "Hex",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
