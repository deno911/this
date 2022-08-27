import { TOML } from "../deps.ts";

Object.assign(globalThis, { TOML });

type Toml = typeof TOML;

declare global {
  const TOML: Toml;
}
