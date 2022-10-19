/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { fc } from "../deps.ts";
import type { Merge } from "../_internal.ts";

type fc = Merge<Omit<typeof fc, "__type" | "__version" | "__commitHash">>;

declare global {
  const fc: fc;
}

Object.assign(globalThis, {
  fc: Object.defineProperty({ ...fc }, Symbol.toStringTag, {
    value: "FastCheck",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
