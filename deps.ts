export { is } from "https://deno.land/x/dis@0.0.1/mod.ts";

export {
  filterEntries,
  filterKeys,
  isKeyOf,
  isObject,
  mapEntries,
  mapKeys,
  memoize,
  memoized,
  objectPick,
  pick,
  sprintf,
} from "https://deno.land/x/911@0.1.5/mod.ts";

/* testing */

/* ./testing/bdd.ts */
export * as bdd from "https://deno.land/std@0.160.0/testing/bdd.ts";

/* ./testing/asserts.ts */
export * as asserts from "https://deno.land/std@0.160.0/testing/asserts.ts";

/* ./testing/snapshot.ts */
export * as snapshot from "https://deno.land/std@0.160.0/testing/snapshot.ts";

/* ./testing/mock.ts */
export * as mock from "https://deno.land/std@0.160.0/testing/mock.ts";

/* ./testing/chai.ts - chai@4.3.4 */
export { default as chai } from "https://cdn.skypack.dev/chai@4.3.4?dts";

/* ./testing/fc.ts - fast-check@v3.2.0 */
export { default as fc } from "https://cdn.skypack.dev/fast-check@v3.2.0?dts";

/* ./encoding/ascii.ts */
export * as ascii85 from "https://deno.land/std@0.160.0/encoding/ascii85.ts";

/* ./encoding/base32.ts */
export * as base32 from "https://deno.land/std@0.160.0/encoding/base32.ts";

/* ./encoding/base64.ts */
export * as base64 from "https://deno.land/std@0.160.0/encoding/base64.ts";

/* ./encoding/base64url.ts */
export * as base64url from "https://deno.land/std@0.160.0/encoding/base64url.ts";

/* ./encoding/hex.ts */
export * as hex from "https://deno.land/std@0.160.0/encoding/hex.ts";

/* ./encoding/binary.ts */
export * as binary from "https://deno.land/std@0.160.0/encoding/binary.ts";

/* ./encoding/toml.ts */
export * as TOML from "https://deno.land/std@0.160.0/encoding/toml.ts";

/* ./encoding/yaml.ts */
export * as YAML from "https://deno.land/std@0.160.0/encoding/yaml.ts";

/* ./encoding/front_matter.ts */
export * as FrontMatter from "https://deno.land/std@0.160.0/encoding/front_matter.ts";

/* ./encoding/jsonc.ts */
export * as JSONC from "https://deno.land/std@0.160.0/encoding/jsonc.ts";

/* ./encoding/json5.ts - json5@1.0.0 */
export { default as JSON5 } from "https://deno.land/x/json5@v1.0.0/mod.ts";

/* ./encoding/jsonstream.ts */
export {
  ConcatenatedJsonParseStream,
  JsonParseStream,
  JsonStringifyStream,
  type JsonValue as JSONValue,
  type JsonValue,
  type ParseStreamOptions,
  type StringifyStreamOptions,
} from "https://deno.land/std@0.160.0/encoding/json/stream.ts";

/* ./encoding/csv.ts */
export * as CSV from "https://deno.land/std@0.160.0/encoding/csv.ts";

/* ./encoding/csvstream.ts */
export {
  CsvStream as CSVStream,
  type CsvStreamOptions as CSVStreamOptions,
} from "https://deno.land/std@0.160.0/encoding/csv/stream.ts";

/* misc tools used internally */
export { BufReader } from "https://deno.land/std@0.160.0/io/buffer.ts";
