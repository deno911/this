import { binary as $binary } from "../deps.ts";

Object.assign(globalThis, { binary: $binary });

declare global {
  const binary: typeof $binary;
}
