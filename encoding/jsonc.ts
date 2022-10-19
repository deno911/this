/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { JSONC as $JSONC } from "../deps.ts";
import type {
  JSONReplacerArray,
  JSONReplacerFn,
  JSONReviverFn,
  JSONValue,
} from "../_internal.ts";

type JSONC = {
  /**
   * Converts a JSONC string into a JavaScript object.
   * @param text - a valid JSONC string
   */
  parse<T extends any = JSONValue>(text: string): T;
  /**
   * Converts a JSONC string into a JavaScript object.
   * @param text - a valid JSONC string
   * @param [options] - allow trailing commas at the end of arrays/objects
   */
  parse<T extends any = JSONValue>(
    text: string,
    { allowTrailingComma }?: {
      /**
       * Allow trailing commas at the end of arrays and objects.
       * @default true
       */
      allowTrailingComma: boolean;
    },
  ): T;
  /**
   * Converts a JSONC string into a JavaScript object.
   * @param text - a valid JSONC string
   * @param [reviver] - function to transform the data before returning it
   * @param [options] - allow trailing commas at the end of arrays/objects
   */
  parse<T extends any = JSONValue>(
    text: string,
    reviver: JSONReviverFn | null,
    { allowTrailingComma }?: {
      /**
       * Allow trailing commas at the end of arrays and objects.
       * @default true
       */
      allowTrailingComma: boolean;
    },
  ): T;

  /**
   * Converts JavaScript values to JavaScript Object Notation (JSON) strings
   * @param value - a JavaScript value (usually an object/array) to convert.
   * @param [replacer] - a function that transforms the results
   * @param [space] - adds indentation, white space, and line breaks to the
   * return-value JSON text to improve readability
   */
  stringify(
    value: JSONValue,
    replacer?: JSONReplacerFn | undefined | null,
    space?: string | number,
  ): string | null;

  /**
   * Converts JavaScript values to JavaScript Object Notation (JSON) strings
   * @param value - a JavaScript value (usually an object/array) to convert.
   * @param [replacer] - an array of strings and numbers that acts as an
   * "approved list" for selecting object properties that will be stringified
   * @param [space] - adds indentation, white space, and line breaks to the
   * return-value JSON text to improve readability
   */
  stringify(
    value: JSONValue,
    replacer?: JSONReplacerArray | undefined | null,
    space?: string | number,
  ): string | null;
};

const JSONC: JSONC = {
  parse(
    text: string,
    reviverOrOptions?: any,
    options: $JSONC.ParseOptions = { allowTrailingComma: true },
  ): JSONValue | null {
    let reviver = undefined;
    if (typeof reviverOrOptions === "function") {
      reviver = reviverOrOptions;
      options = { allowTrailingComma: true };
    } else if (typeof reviverOrOptions === "object") {
      options = { ...options, ...reviverOrOptions };
      reviver = undefined;
    }
    try {
      const parsed = $JSONC.parse(text, options);
      if (reviver == null) {
        return parsed;
      }
      // FIXME: horribly inefficient, but the only solution I can currently
      // come up with for JSONC parsing with reviver functionality
      return JSON.parse(JSON.stringify(parsed), reviver);
    } catch {
      try {
        return JSON.parse(text, reviver as JSONReviverFn | undefined);
      } catch {
        return null;
      }
    }
  },
  stringify(
    value: any,
    replacerOrSpace: any = undefined,
    space: string | number = 0,
  ): string | null {
    let replacer: JSONReplacerFn | JSONReplacerArray | undefined = undefined;
    if (typeof replacerOrSpace === "string") {
      space = replacerOrSpace;
    } else if (typeof replacerOrSpace === "number") {
      space = +replacerOrSpace;
    } else if (Array.isArray(replacerOrSpace)) {
      replacer = replacerOrSpace as JSONReplacerArray;
    } else if (typeof replacerOrSpace === "function") {
      replacer = replacerOrSpace as JSONReplacerFn;
    }

    try {
      return JSON.stringify(value, replacer as any, space);
    } catch {
      // swallow the error, return empty string
      return null;
    }
  },
};

declare global {
  const JSONC: JSONC;
}

Object.assign(globalThis, {
  JSONC: Object.defineProperty(JSONC, Symbol.toStringTag, {
    value: "JSONC",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
