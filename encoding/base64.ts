import { base64 } from "../deps.ts";

Object.assign(globalThis, { base64 });

type Base64 = typeof base64;

declare global {
  const base64: Base64;
}
