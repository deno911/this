/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { YAML } from "../deps.ts";
import { type Merge } from "../_internal.ts";

type YAML = Omit<Merge<typeof YAML>, `${string}_SCHEMA` | "Type">;

declare global {
  const YAML: YAML;
}

Object.assign(globalThis, {
  YAML: Object.defineProperties(
    Object.assign(Object.create(null), { ...YAML }),
    {
      CORE_SCHEMA: {
        enumerable: false,
      },
      DEFAULT_SCHEMA: {
        enumerable: false,
      },
      EXTENDED_SCHEMA: {
        enumerable: false,
      },
      FAILSAFE_SCHEMA: {
        enumerable: false,
      },
      JSON_SCHEMA: {
        enumerable: false,
      },
      Type: {
        enumerable: false,
      },
      [Symbol.toStringTag]: {
        value: "YAML",
      },
    },
  ) as YAML,
});
