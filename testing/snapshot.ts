import { snapshot } from "../deps.ts";

Object.assign(globalThis, snapshot);

declare global {
  const assertSnapshot: typeof snapshot.assertSnapshot;
  const serialize: typeof snapshot.serialize;
}
