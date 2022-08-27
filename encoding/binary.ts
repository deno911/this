import { binary } from "../deps.ts";

Object.assign(globalThis, { binary });

type Binary = typeof binary;

declare global {
  const binary: Binary;
}
