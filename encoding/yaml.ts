import { YAML as $YAML } from "../deps.ts";

declare global {
  namespace globalThis {
    const YAML: typeof $YAML;
  }
}

Object.assign(globalThis, { YAML: $YAML });
