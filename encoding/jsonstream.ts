import {
  ConcatenatedJSONParseStream,
  JSONParseStream,
  JSONStringifyStream,
  type JSONValue as JSONValueT,
  type ParseStreamOptions,
  type StringifyStreamOptions,
} from "../deps.ts";

const JSONStream = {
  Parse: JSONParseStream,
  Stringify: JSONStringifyStream,
  Concatenated: ConcatenatedJSONParseStream,
  parse({
    writableStrategy,
    readableStrategy,
  }: ParseStreamOptions = {}): JSONParseStream {
    return new JSONParseStream({ writableStrategy, readableStrategy });
  },
  stringify({
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
  parseConcat({
    writableStrategy,
    readableStrategy,
  }: ParseStreamOptions = {}): ConcatenatedJSONParseStream {
    return new ConcatenatedJSONParseStream({
      writableStrategy,
      readableStrategy,
    });
  },
} as JSONStream;

Object.assign(globalThis, { JSONStream });

declare global {
  namespace JSONStream {
    type ParseOptions = ParseStreamOptions;
    type StringifyOptions = StringifyStreamOptions;
    type JSONValue = JSONValueT;
  }
  interface JSONStream {
    Parse: typeof JSONParseStream;
    Stringify: typeof JSONStringifyStream;
    Concatenated: typeof ConcatenatedJSONParseStream;
    parse(
      { writableStrategy, readableStrategy }: ParseStreamOptions,
    ): JSONParseStream;
    stringify({
      writableStrategy,
      readableStrategy,
      prefix,
      suffix,
    }: StringifyStreamOptions): JSONStringifyStream;
    parseConcat(
      { writableStrategy, readableStrategy }: ParseStreamOptions,
    ): ConcatenatedJSONParseStream;
  }
  const JSONStream: JSONStream;
}
