# 🦖 this

Extend the Deno runtime global scope by injecting fully-typed
functions/constants into `globalThis`. This module makes use of _**side-effect
imports**_, meaning you do not need to import any actual named variables or
functions - just import the filename itself.

## encoding

```ts
import "https://deno.land/x/this@0.0.1/encoding.ts";
```

- **`base64`** - [base64.ts](https://deno.land/std/encoding/base64.ts)
- **`base64url`** - [base64url.ts](https://deno.land/std/encoding/base64url.ts)
- **`binary`** - [binary.ts](https://deno.land/std/encoding/binary.ts)
- **`CSV`** - [csv.ts](https://deno.land/std/encoding/csv.ts)
- **`fm`** - [front_matter.ts](https://deno.land/std/encoding/front_matter.ts)
- **`hex`** - [hex.ts](https://deno.land/std/encoding/hex.ts)
- **`JSONC`** - [jsonc.ts](https://deno.land/std/encoding/jsonc.ts)
- **`JSONStream`** - [stream.ts](https://deno.land/std/encoding/json/stream.ts)
- **`TOML`** - [toml.ts](https://deno.land/std/encoding/toml.ts)
- **`YAML`** - [yaml.ts](https://deno.land/std/encoding/yaml.ts)

Also creates globals for this third-party library:

- **`JSON5`** - [x/json5](https://deno.land/x/json5)

---  

## testing.ts

```ts
import "https://deno.land/x/this@0.0.1/testing.ts";
```

- [std/testing/asserts.ts](https://deno.land/std/testing/asserts.ts)
- [std/testing/bdd.ts](https://deno.land/std/testing/bdd.ts)
- [std/testing/mock.ts](https://deno.land/std/testing/mock.ts)
- [std/testing/snapshot.ts](https://deno.land/std/testing/snapshot.ts)

Also creates globals for these third-party testing libraries:

- **`chai`** - `chai@4.3.4`
- **`fc`** - `fast-check@3.1.1`

---

## Examples

### JSONC, JSON5, TOML, YAML

```ts
import "https://deno.land/x/this@0.0.1/encoding.ts";

const config = JSONC.parse(await Deno.readTextFile("./deno.jsonc"));

// deno.json5
await Deno.writeTextFile("./deno.json5", JSON5.stringify(config, null, 2));

// deno.toml
await Deno.writeTextFile("./deno.toml", TOML.stringify(config));

// deno.yml
await Deno.writeTextFile("./deno.yml", YAML.stringify(config));
```

### Global Assertions

```ts
import "https://deno.land/x/this@0.0.1/testing.ts";

Deno.test("URL Test", () => {
  const url = new URL("./this@0.0.1/mod.ts", "https://deno.land/x/");
  assertEquals(url.href, "https://deno.land/x/this@0.0.1/mod.ts");
});

describe("Users Map", () => {
  const users = new Map();
  it("is initially empty", () => {
    assertEquals(users.size, 0);
  });
  it("is writeable", () => {
    users.set("key", "value");
    assertEquals(users.size, 1);
  })
  it("is readable", () => {
    assertArrayIncludes([...users.values()], ["value"]);
  })
});

```

---

<div align="center">

The foundation of this module was inspired by [ije/global](https://github.com/ije/global).

MIT © [Nicholas Berlette](https://github.com/nberlette) and [ije](https://github.com/ije)

</div>
