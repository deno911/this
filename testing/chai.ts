/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { chai } from "../deps.ts";
import type { Merge } from "../_internal.ts";

type chai = Merge<typeof chai>;

declare global {
  // @ts-ignore double-declaration because of chai's bad practices w/ typedefs
  const chai: chai;
}

Object.assign(globalThis, { chai });
