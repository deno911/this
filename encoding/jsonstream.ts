/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import {
  ConcatenatedJsonParseStream,
  JsonParseStream,
  JsonStringifyStream,
  type ParseStreamOptions,
  type StringifyStreamOptions,
} from "../deps.ts";

type JsonStream = {
  Parse: typeof JsonParseStream;
  Stringify: typeof JsonStringifyStream;
  Concatenated: typeof ConcatenatedJsonParseStream;
  useParse(
    { writableStrategy, readableStrategy }: ParseStreamOptions,
  ): JsonParseStream;
  useStringify({
    writableStrategy,
    readableStrategy,
    prefix,
    suffix,
  }: StringifyStreamOptions): JsonStringifyStream;
  useConcat(
    { writableStrategy, readableStrategy }: ParseStreamOptions,
  ): ConcatenatedJsonParseStream;
};

const JsonStream: JsonStream = {
  Parse: JsonParseStream,
  Stringify: JsonStringifyStream,
  Concatenated: ConcatenatedJsonParseStream,
  useParse({
    writableStrategy,
    readableStrategy,
  }: ParseStreamOptions = {}): JsonParseStream {
    return new JsonParseStream({ writableStrategy, readableStrategy });
  },
  useStringify({
    writableStrategy,
    readableStrategy,
    prefix,
    suffix,
  }: StringifyStreamOptions = {}): JsonStringifyStream {
    return new JsonStringifyStream({
      writableStrategy,
      readableStrategy,
      prefix,
      suffix,
    });
  },
  useConcat({
    writableStrategy,
    readableStrategy,
  }: ParseStreamOptions = {}): ConcatenatedJsonParseStream {
    return new ConcatenatedJsonParseStream({
      writableStrategy,
      readableStrategy,
    });
  },
};

Object.defineProperty(JsonStream, Symbol.toStringTag, { value: "JsonStream" });

declare global {
  const JsonStream: JsonStream;
  /** @deprecated use {@linkcode JsonStream} instead */
  const JSONStream: JsonStream;
}

Object.assign(globalThis, { JsonStream, JSONStream: JsonStream });
