import { YAML } from "../deps.ts";

Object.assign(globalThis, { YAML });

type Yaml = typeof YAML;

declare global {
  const YAML: Yaml;
}
