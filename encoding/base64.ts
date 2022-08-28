/// <reference lib="deno.window" />

import { base64 as $base64 } from "../deps.ts";

const utf8decoder = new TextDecoder();

const base64: base64 = {
  encode: (data) => $base64.encode(data),
  decode: (b64) => utf8decoder.decode($base64.decode(b64)),
  decodeBytes: (b64) => $base64.decode(b64),
};

Object.assign(globalThis, { base64 });

declare global {
  interface base64 {
    encode(data: ArrayBuffer | string): string;
    /**
     * Decodes a given RFC4648 base64 encoded string, returning a Uint8Array.
     * @param b64
     */
    decodeBytes(b64: string): Uint8Array;
    /**
     * Decodes a given RFC4648 base64 encoded string, returning a string.
     * @param b64
     */
    decode(b64: string): string;
  }
  namespace globalThis {
    const base64: base64;
  }
}
