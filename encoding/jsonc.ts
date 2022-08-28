// deno-lint-ignore-file no-var
import { JSONC as $JSONC } from "../deps.ts";

const JSONC = {
  parse(
    text: string,
    reviver: $JSONC.ParseOptions | JSONReviverFn,
  ): JSONValue {
    let options: $JSONC.ParseOptions;
    if (typeof reviver === "function") {
      options = { allowTrailingComma: true };
    } else if ({}.toString.call(reviver) === "[object Object]") {
      options = reviver;
      reviver = undefined;
    }
    try {
      return $JSONC.parse(text, options);
    } catch {
      try {
        return JSON.parse(text, reviver as JSONReviverFn);
      } catch {
        return null;
      }
    }
  },
  stringify(
    value: any,
    replacerOrSpace: any = undefined,
    space: string | number = 0,
  ): string {
    let replacer: JSONReplacerFn = undefined;
    if (
      typeof replacerOrSpace === "string" || typeof replacerOrSpace === "number"
    ) {
      space = replacerOrSpace;
      replacer = undefined;
    } else if (
      Array.isArray(replacerOrSpace) || typeof replacerOrSpace === "function"
    ) {
      replacer = replacerOrSpace as JSONReplacerFn;
    }
    try {
      return JSON.stringify(value, replacer, space);
    } catch {
      // swallow the error, return empty string
      return null;
    }
  },
};

type JSONReplacerFn = (this: any, key: string, value: any) => any;
type JSONReviverFn = (this: any, key: string, value: any) => any;

declare global {
  type JSONValue =
    | { [key: string]: JSONValue }
    | JSONValue[]
    | string
    | number
    | boolean
    | null;
  interface JSONC {
    parse(
      text: string,
      { allowTrailingComma }?: {
        /**
         * Allow trailing commas at the end of arrays and objects.
         * @default true
         */
        allowTrailingComma: boolean;
      },
    ): JSONValue;
    stringify(
      value: any,
      replacer?: (this: any, key: string, value: any) => any,
      space?: string | number,
    ): string;
    stringify(
      value: any,
      replacer?: (string | number)[],
      space?: string | number,
    ): string;
  }
  namespace globalThis {
    const JSONC: JSONC;
  }
}

Object.assign(globalThis, { JSONC });
