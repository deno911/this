import { hex } from "../deps.ts";

Object.assign(globalThis, { hex });

type Hex = typeof hex;

declare global {
  const hex: Hex;
}
