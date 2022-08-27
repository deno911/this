import { fc as $fc } from "../deps.ts";

Object.assign(globalThis, { fc: $fc });

declare global {
  const fc: typeof $fc;
}
