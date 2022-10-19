/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import type {
  JSONReplacerFn,
  JSONReviverFn,
  JSONValue,
  Merge,
} from "../_internal.ts";
import { JSON5 as JSON5_MOD } from "../deps.ts";

/**
 * Converts a JSON5 string into an object.
 * @template T Type of return value.
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is
 * called for each member of the object. If a member contains nested objects,
 * the nested objects are transformed before the parent object is.
 */
function parse<T extends any = JSONValue>(
  text: string,
  reviver?: JSONReviverFn,
): T {
  return JSON5_MOD.parse(text, reviver);
}

/**
 * Converts a JavaScript value to a JSON5 string.
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
function stringify(
  value: JSONValue,
  replacer?: JSONReplacerFn,
  space?: string | number,
): string {
  return JSON5_MOD.stringify(
    value,
    replacer,
    space ?? 0,
  );
}

/**
 * Loads JSON5 from file synchronously
 * @param path File path or url
 */
function require<T extends any = JSONValue>(
  path: string | URL,
  reviver?: JSONReviverFn,
): T {
  const raw = Deno.readTextFileSync(path);
  return parse<T>(raw, reviver);
}

/**
 * Loads JSON5 from file asynchronously
 * @param path File path or url
 */
async function requireAsync<T extends any = JSONValue>(
  path: string | URL,
  reviver?: JSONReviverFn,
): Promise<T> {
  const raw = await Deno.readTextFile(path);
  return parse<T>(raw, reviver);
}

// defaults
const JSON5 = { parse, stringify, require, requireAsync };

const descriptor = {
  enumerable: true,
  writable: false,
  configurable: false,
};

Object.defineProperties(JSON5, {
  parse: descriptor,
  stringify: descriptor,
  require: descriptor,
  requireAsync: descriptor,
  [Symbol.toStringTag]: {
    value: "JSON5",
  },
});

type JSON5 = Merge<typeof JSON5>;

declare global {
  const JSON5: JSON5;
}

Object.freeze(JSON5);

Object.assign(globalThis, { JSON5 });
