import { chai as $chai } from "../deps.ts";

Object.assign(globalThis, { chai: $chai });

declare global {
  const chai: typeof $chai;
}
