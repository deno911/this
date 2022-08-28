import { front_matter as $front_matter } from "../deps.ts";

Object.assign(globalThis, { front_matter: $front_matter });

declare global {
  const front_matter: typeof $front_matter;
}
