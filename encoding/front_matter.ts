import { front_matter } from "../deps.ts";

Object.assign(globalThis, { front_matter });

type Frontmatter = typeof front_matter;

declare global {
  const front_matter: Frontmatter;
}
