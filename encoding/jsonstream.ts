/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import {
  ConcatenatedJSONParseStream,
  JSONParseStream,
  JSONStringifyStream,
  type ParseStreamOptions,
  type StringifyStreamOptions,
} from "../deps.ts";

type JSONStream = {
  Parse: typeof JSONParseStream;
  Stringify: typeof JSONStringifyStream;
  Concatenated: typeof ConcatenatedJSONParseStream;
  useParse(
    { writableStrategy, readableStrategy }: ParseStreamOptions,
  ): JSONParseStream;
  useStringify({
    writableStrategy,
    readableStrategy,
    prefix,
    suffix,
  }: StringifyStreamOptions): JSONStringifyStream;
  useConcat(
    { writableStrategy, readableStrategy }: ParseStreamOptions,
  ): ConcatenatedJSONParseStream;
};

const JSONStream: JSONStream = {
  Parse: JSONParseStream,
  Stringify: JSONStringifyStream,
  Concatenated: ConcatenatedJSONParseStream,
  useParse({
    writableStrategy,
    readableStrategy,
  }: ParseStreamOptions = {}): JSONParseStream {
    return new JSONParseStream({ writableStrategy, readableStrategy });
  },
  useStringify({
    writableStrategy,
    readableStrategy,
    prefix,
    suffix,
  }: StringifyStreamOptions = {}): JSONStringifyStream {
    return new JSONStringifyStream({
      writableStrategy,
      readableStrategy,
      prefix,
      suffix,
    });
  },
  useConcat({
    writableStrategy,
    readableStrategy,
  }: ParseStreamOptions = {}): ConcatenatedJSONParseStream {
    return new ConcatenatedJSONParseStream({
      writableStrategy,
      readableStrategy,
    });
  },
};

declare global {
  const JSONStream: JSONStream;
}

Object.assign(globalThis, {
  JSONStream: Object.defineProperty(JSONStream, Symbol.toStringTag, {
    value: "JSONStream",
    writable: false,
    enumerable: false,
    configurable: false,
  }),
});
