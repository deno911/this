import { TOML as $TOML } from "../deps.ts";

declare global {
  namespace globalThis {
    const TOML: typeof $TOML;
  }
}

Object.assign(globalThis, { TOML: $TOML });
