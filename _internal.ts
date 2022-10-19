export {
  filterEntries,
  filterKeys,
  isKeyOf,
  isObject,
  mapEntries,
  mapKeys,
  objectPick,
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
