import { hex as $hex } from "../deps.ts";

declare global {
  namespace globalThis {
    const hex: typeof $hex;
  }
}

Object.assign(globalThis, { hex: $hex });
