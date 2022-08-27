import { JSON5 } from "../deps.ts";

Object.assign(globalThis, { JSON5 });

type Json5 = typeof JSON5;

declare global {
  const JSON5: Json5;
}
