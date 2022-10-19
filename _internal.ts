export {
  filterEntries,
  filterKeys,
  isKeyOf,
  isObject,
  mapEntries,
  mapKeys,
  objectPick,
  pick,
} from "./deps.ts";

export type Primitive = string | number | bigint | boolean | symbol;

export type LiteralUnion<
  Literal extends BaseType,
  BaseType extends Primitive,
> = Literal | (BaseType & Record<never, never>);

export type JSONReplacerFn = (this: any, key: string, value: any) => any;

export type JSONReplacerArray = (string | number)[];

export type JSONReviverFn = (this: any, key: string, value: any) => any;

export type JsonValue =
  | { [key: string]: JsonValue | undefined }
  | JsonValue[]
  | string
  | number
  | boolean
  | null;

export type { JsonValue as JSONValue };

export function objectMap<
  Input extends Record<PropertyKey, unknown>,
  CallbackFn extends (this: Input, value: V, key: K, array: [K, V][]) => V2,
  K extends keyof Input,
  V extends Input[K],
  V2,
>(obj: Input, callbackfn: CallbackFn) {
  const entries = Object.entries(obj) as [K, V][];
  const mappedEntries = entries.map(
    ([k, v], _, a) => [k, callbackfn.bind(obj, v, k, a)],
  );

  return Object.fromEntries(mappedEntries) as (
    CallbackFn extends ((v: infer Val, k: infer P, array: [K, V][]) => infer O)
      ? [O] extends [Entry<infer OK, infer OV>] ? { [Key in P as OK]: OV }
      : [O] extends [infer OV] ? { [Key in K]: OV }
      : never
      : never
  );
}

export type Entry<K extends PropertyKey = string, V extends unknown = string> =
  readonly [K, V];

export type Merge<T, Deep = false> = T extends
  infer U extends Record<string, unknown>
  ? { [K in keyof U]: Deep extends true ? Merge<U[K], Deep> : U[K] }
  : T;

export type MergeTuples<A extends Tuple, B extends Tuple = []> = [...A, ...B];

export type Tuple<T = unknown, ReadOnly = true> = ReadOnly extends true
  ? readonly T[]
  : T[];

export type LastInTuple<T extends Tuple> = T extends
  { readonly length: infer L extends number } ? [L] extends [0] ? undefined
  : [unknown, ...T][L]
  : never;

export type FirstInTuple<T extends Tuple> = T extends
  { readonly length: infer L extends number } ? [L] extends [0] ? undefined
  : T[0]
  : never;

export type KeysOfUnion<T> = T extends T ? keyof T : never;

export type Writable<T, Deep = false> = T extends Record<string, unknown> ? {
    -readonly [K in keyof T]?: Deep extends true ? Writable<T[K], true> : T[K];
  }
  : T;

export type Readonly<T, Deep = false> = T extends Record<string, unknown> ? {
    readonly [K in keyof T]?: Deep extends true ? Readonly<T[K], Deep> : T[K];
  }
  : T;

export type Optional<T, Deep = false> = T extends Record<string, unknown>
  ? { [K in keyof T]?: Deep extends true ? Optional<T[K], Deep> : T[K] }
  : T;

export type Required<T, Deep = false> = T extends Record<string, unknown>
  ? { [K in keyof T]-?: Deep extends true ? Required<T[K], Deep> : T[K] }
  : T;
