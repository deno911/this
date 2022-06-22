import * as snapshot from "https://deno.land/std@0.144.0/testing/snapshot.ts";

Object.assign(globalThis, snapshot);

declare global {
  const assertSnapshot: typeof snapshot.assertSnapshot;
  const serialize: typeof snapshot.serialize;
}
