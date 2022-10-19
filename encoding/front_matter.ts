/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { FrontMatter } from "../deps.ts";
import type { Merge } from "../_internal.ts";

type FrontMatter = Merge<typeof FrontMatter>;

declare global {
  const FrontMatter: FrontMatter;
}

Object.assign(globalThis, {
  FrontMatter: Object.defineProperty({ ...FrontMatter }, Symbol.toStringTag, {
    value: "FrontMatter",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
