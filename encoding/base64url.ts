import { base64url } from "../deps.ts";

Object.assign(globalThis, { base64url });

type Base64url = typeof base64url;

declare global {
  const base64url: Base64url;
}
