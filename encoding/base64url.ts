/// <reference lib="deno.window" />

import { base64url as $base64url } from "../deps.ts";

const utf8decoder = new TextDecoder();

const base64url: base64url = {
  encode: (data) => $base64url.encode(data),
  decode: (b64url) => utf8decoder.decode($base64url.decode(b64url)),
  decodeBytes: (b64url) => $base64url.decode(b64url),
};

Object.assign(globalThis, { base64url });

declare global {
  interface base64url {
    /**
     * Encodes a given ArrayBuffer or string into a base64url representation
     * @param data
     */
    encode(data: ArrayBuffer | string): string;
    /**
     * Converts given base64url encoded data back to original string.
     * @param b64url
     * @see {@link base64url.encode}
     * @see {@link base64url.decodeBytes}
     */
    decode(b64url: string): string;
    /**
     * Converts given base64url encoded data back to original TypedArray.
     * @param b64url
     * @see {@link base64url.encode}
     * @see {@link base64url.decode}
     */
    decodeBytes(b64url: string): Uint8Array;
  }
  namespace globalThis {
    const base64url: base64url;
  }
}
