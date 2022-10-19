/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { CSV } from "../deps.ts";
import type { Merge } from "../_internal.ts";

type CSV = Merge<typeof CSV>;

declare global {
  const CSV: CSV;
}

Object.assign(globalThis, {
  CSV: Object.defineProperty<CSV>({ ...CSV }, Symbol.toStringTag, {
    value: "CSV",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
