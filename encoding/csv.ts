import { CSV as $CSV } from "../deps.ts";

Object.assign(globalThis, { CSV: $CSV });

declare global {
  const CSV: typeof $CSV;
}
