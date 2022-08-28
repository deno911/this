import { JSON5 as $JSON5 } from "../deps.ts";

declare global {
  namespace globalThis {
    const JSON5: typeof $JSON5;
  }
}

Object.assign(globalThis, { JSON5: $JSON5 });
