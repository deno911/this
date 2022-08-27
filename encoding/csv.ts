import { CSV } from "../deps.ts";

Object.assign(globalThis, { CSV });

type Csv = typeof CSV;

declare global {
  const CSV: Csv;
}
