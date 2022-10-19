/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.window" />

import { base64 as $base64 } from "../deps.ts";

const utf8 = new TextDecoder();

declare type base64 = {
  /**
   * Encodes a string or ArrayBuffer into a base64 string.
   * @param data
   * @returns RFC4648 base64-encoded string
   */
  encode(data: ArrayBuffer | string): string;
  /**
   * Decodes a given RFC4648 base64-encoded string into its original value.
   * @param b64
   * @returns original decoded value as a Uint8Array
   */
  decodeBytes(b64: string): Uint8Array;
  /**
   * Decodes a given RFC4648 base64-encoded string into its original value.
   * @param b64
   * @returns original decoded value as a string
   */
  decode(b64: string): string;
};

declare global {
  const base64: base64;
}

const base64 = Object.defineProperties<base64>({
  encode: (data) => $base64.encode(data),
  decode: (b64) => utf8.decode($base64.decode(b64)),
  decodeBytes: (b64) => $base64.decode(b64),
}, {
  encode: { enumerable: true },
  decode: { enumerable: true },
  decodeBytes: { enumerable: true },
  [Symbol.toStringTag]: { value: "base64" },
}) as base64;

Object.assign(globalThis, { base64 });
