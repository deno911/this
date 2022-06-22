import * as asserts from "https://deno.land/std@0.144.0/testing/asserts.ts";

Object.assign(globalThis, asserts);

declare global {
  const assert: typeof asserts.assert;
  const assertAlmostEquals: typeof asserts.assertAlmostEquals;
  const assertArrayIncludes: typeof asserts.assertArrayIncludes;
  const assertEquals: typeof asserts.assertEquals;
  const assertExists: typeof asserts.assertExists;
  const assertFalse: typeof asserts.assertFalse;
  const assertInstanceOf: typeof asserts.assertInstanceOf;
  const assertIsError: typeof asserts.assertIsError;
  const assertMatch: typeof asserts.assertMatch;
  const assertNotEquals: typeof asserts.assertNotEquals;
  const assertNotMatch: typeof asserts.assertNotMatch;
  const assertNotStrictEquals: typeof asserts.assertNotStrictEquals;
  const assertObjectMatch: typeof asserts.assertObjectMatch;
  const assertRejects: typeof asserts.assertRejects;
  const assertStrictEquals: typeof asserts.assertStrictEquals;
  const assertStringIncludes: typeof asserts.assertStringIncludes;
  const assertThrows: typeof asserts.assertThrows;
  const equal: typeof asserts.equal;
  const fail: typeof asserts.fail;
  const unimplemented: typeof asserts.unimplemented;
  const unreachable: typeof asserts.unreachable;
}
