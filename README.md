<!-- deno-fmt-ignore-file -->
# [![deno911/this][banner-img]][this]

## **Usage**

```ts
import "https://deno.land/x/this@0.160.1/mod.ts";
```

<details><summary><strong><u>Table of Contents</u></strong></summary><br>  

- [**Usage**](#usage)
- [**encoding**](#encoding)
  - [**`CSV`**](#csv)
  - [**`JSONC`**](#jsonc)
  - [**`JSON5`**](#json5)
  - [**`JsonStream`**](#jsonstream)
  - [**`TOML`**](#toml)
  - [**`YAML`**](#yaml)
  - [**`FrontMatter`**](#frontmatter)
  - [**`base64`**](#base64)
  - [**`base64url`**](#base64url)
  - [**`binary`**](#binary)
  - [**`Hex`**](#hex)
- [**testing**](#testing)
  - [**`all`**](#all)
  - [**`asserts`**](#asserts)
  - [**`bdd`**](#bdd)
  - [**`mock`**](#mock)
  - [**`snapshot`**](#snapshot)
  - [**`chai`**](#chai)
  - [**`fc`**](#fc-fastcheck)
- [**Examples**](#examples)
- [**Contributing**](#contributing)

</details><br>

This project uses side-effect imports to extend the global namespace of the Deno runtime. It adds various tools from Deno Standard Library's `encoding` and `testing` suites.

For example, by importing `./encoding.ts`, your project will have access to `CSV`, `JSON5`, `YAML`, and `TOML` modules (to name a few) **at the global level**. See all available API's below.

---  

## **encoding**

`this/encoding` exposes all the [`std/encoding`](https://deno.land/std@0.160.0/encoding) modules from the
Deno Standard Library, along with a few extra goodies too.

```ts
import "https://deno.land/x/this@0.160.1/encoding.ts";
```

### **CSV**

```ts
import "https://deno.land/x/this@0.160.1/encoding/csv.ts";
```

#### `.parse`

```ts
CSV.parse(text: string, options?: CSV.ParseOptions): string[][];
```

```ts
CSV.parse(text: string, { columns?: CSV.Column[]; }): Record<string, unknown>;
```

#### `.stringify`

```ts
CSV.stringify(data: CSV.DataItem[], options?: CSV.StringifyOptions): string;
```

> **Source**: [**`std@0.160.0/encoding/csv.ts`**](https://deno.land/std@0.160.0/encoding/csv.ts)

### **JSONC**

```ts
import "https://deno.land/x/this@0.160.1/encoding/jsonc.ts";
```

#### `.parse`

```ts
JSONC.parse(data: string, { allowTrailingComma?: boolean }): JsonValue;
```

#### `.stringify`

```ts
JSONC.stringify(data: JsonValue, replacer?: (key: string, value: any) => any, space?: string | number): string;
```

```ts
JSONC.stringify(data: JsonValue, replacer?: (string | number)[], space?: string | number): string;
```

> **Source**: [**`std@0.160.0/encoding/jsonc.ts`**](https://deno.land/std@0.160.0/encoding/jsonc.ts)

### **JSON5**

```ts
import "https://deno.land/x/this@0.160.1/encoding/json5.ts";
```

#### `.parse`

```ts
JSON5.parse<T = JSONValue>(text: string, reviver?: JSONReviverFn): T;
```

#### `.stringify`

```ts
JSON5.stringify(data: JSONValue, replacer?: JSONReplacerFn, space?: string | number): string;
```

#### `.require`

```ts
JSON5.require<T = JSONValue>(path: string | URL, reviver?: JSONReviverFn): T;
```

#### `.requireAsync`

```ts
JSON5.require<T = JSONValue>(path: string | URL, reviver?: JSONReviverFn): Promise<T>;
```

### **JsonStream**

```ts
import "https://deno.land/x/this@0.160.1/encoding/jsonstream.ts";
```

This is a custom implementation of the Deno Standard Library's JsonStream classes.  

Importing `jsonstream.ts` creates a global named **`JsonStream`** with these properties:

#### `.Parse`

Shorthand alias for the **`JsonParseStream`** class.  

Must be called with the **`new`** keyword before its constructor, like so:

```ts
const stream = new JsonStream.Parse(...options);
```

[**`JsonParseStream Documentation`**](https://doc.deno.land/https://deno.land/std@0.160.0/encoding/json/stream.ts/~/JsonParseStream)

#### `.Stringify`

Shorthand alias for the **`JsonStringifyStream`** class.  

Must be called with the **`new`** keyword before its constructor, like so:

```ts
const stream = new JsonStream.Stringify(...options);
```

[**`JsonStringifyStream Documentation`**](https://doc.deno.land/https://deno.land/std@0.160.0/encoding/json/stream.ts/~/JsonStringifyStream)

#### `.Concatenated`

Shorthand alias for the **`ConcatenatedJsonParseStream`** class.  

Must be called with the **`new`** keyword before its constructor, like so:

```ts
const stream = new JsonStream.Concatenated(...options);
```

[**`ConcatenatedJsonParseStream Documentation`**](https://doc.deno.land/https://deno.land/std@0.160.0/encoding/json/stream.ts/~/ConcatenatedJsonParseStream)

#### `.useParse`

Shorthand equivalent to calling **`new JsonStream.Parse()`**, this creates a new instance of the `JsonParseStream` class.

```ts
const stream = JsonStream.useParse(...options);
```

#### `.useStringify`

Shorthand equivalent to calling **`new JsonStream.Stringify()`**, this creates a new instance of the **`JsonStringifyStream`** class.

```ts
const stream = JsonStream.useStringify(...options);
```

#### `.useConcat`

Shorthand equivalent to calling **`new JsonStream.Concatenated()`**, this creates a new instance of the **`ConcatenatedJsonParseStream`** class.

```ts
const stream = JsonStream.useConcat(...options);
```

### **TOML**

```ts
import "https://deno.land/x/this@0.160.1/encoding/toml.ts";
```

#### `.parse`

```ts
TOML.parse(text: string): Record<string, unknown>;
```

#### `.stringify`

```ts
TOML.stringify(data: Record<string, unknown>, options: TOML.FormatOptions): string;
```

> **Source**: [**`std@0.160.0/encoding/toml.ts`**](https://deno.land/std@0.160.0/encoding/toml.ts)

### **YAML**

```ts
import "https://deno.land/x/this@0.160.1/encoding/yaml.ts";
```

#### `.parse`

```ts
YAML.parse(content: string, options?: LoaderStateOptions): unknown;
```

#### `.parseAll`

```ts
YAML.parseAll(content: string, options?: LoaderStateOptions): unknown;
```

```ts
YAML.parseAll(content: string, iterator: CbFunction, options?: LoaderStateOptions);
```

#### `.stringify`

```ts
YAML.stringify(obj: Record<string, unknown>, options?: DumperStateOptions): string;
```

> **Source**: [**`std@0.160.0/encoding/yaml.ts`**](https://deno.land/std@0.160.0/encoding/yaml.ts)


### **FrontMatter**

```ts
import "https://deno.land/x/this@0.160.1/encoding/front_matter.ts";
```

#### `.extract`

```ts
FrontMatter.extract<T = unknown>(str: string): Extract<T>;
```

```ts
type Extract<T> = {
  frontMatter: string;
  body: string;
  attrs: T;
}
```

#### `.test`

```ts
FrontMatter.test(markdown: string): boolean;
```

> **Source**: [**`std@0.160.0/encoding/front_matter.ts`**](https://deno.land/std@0.160.0/encoding/front_matter.ts)

---

### **base64**

```ts
import "https://deno.land/x/this@0.160.1/encoding/base64.ts";
```

#### `.encode`

```ts
base64.encode(data: ArrayBuffer | string): string;
```

#### `.decode`

```ts
base64.decode(b64: string): string;
```

#### `.decodeBytes`

```ts
base64.decodeBytes(b64: string): Uint8Array;
```

> **Source**: [**``std@0.160.0/encoding/base64.ts``**](https://deno.land/std@0.160.0/encoding/base64.ts)

---  

### **base64url**

```ts
import "https://deno.land/x/this@0.160.1/encoding/base64url.ts";
```

#### `.encode`

```ts
base64.encode(data: BufferSource | string): string;
```

#### `.decode`

```ts
base64.decode(b64url: string): string;
```

#### `.decodeBytes`

```ts
base64.decodeBytes(b64url: string): Uint8Array;
```

> **Source**: [**`std@0.160.0/encoding/base64url.ts`**](https://deno.land/std@0.160.0/encoding/base64url.ts)

### **binary**

```ts
import "https://deno.land/x/this@0.160.1/encoding/binary.ts";
```

> **Source**: [**`std@0.160.0/encoding/binary.ts`**](https://deno.land/std@0.160.0/encoding/binary.ts)


### **Hex**

```ts
import "https://deno.land/x/this@0.160.1/encoding/hex.ts";
```

#### `.encode`

```ts
Hex.encode(); // TODO
```

#### `.decode`

```ts
Hex.decode(); // TODO
```

> **Source**: [**`std@0.160.0/encoding/hex.ts`**](https://deno.land/std@0.160.0/encoding/hex.ts)

---

## **testing**

```ts
import "https://deno.land/x/this@0.160.1/testing.ts";
```

> **Note**: due to the size of [`chai`](#chai) and [`fc`](#fc-fastcheck), they
> have been excluded from the imports in the `./testing.ts` file. To use them,
> please import their respective files instead. Or, if you **really** want to
> YOLO, you can import ***all of the testing tools at once***. See below.

### **all**

```ts
import "https://deno.land/x/this@0.160.1/testing/all.ts";
```

> **Warning**: this Imports everything below add quite a bit of weight to your project.

### **asserts**

```ts
import "https://deno.land/x/this@0.160.1/testing/asserts.ts";
```

> **Source**: [**`std@0.160.0/testing/asserts.ts`**](https://deno.land/std@0.160.0/testing/asserts.ts)

---

### **bdd**

```ts
import "https://deno.land/x/this@0.160.1/testing/bdd.ts";
```

#### `beforeAll`

```ts
let fixture: Set<number>;
let startTime: number, endTime: number;

beforeAll(() => {
  fixture = new Set([]);
  startTime = Date.now(); 
});
```

#### `afterAll`

```ts
afterAll(() => {
  fixture.clear();
  fixture = undefined;
  console.log
});
```

#### `beforeEach`

```ts
beforeEach(() => {
  fixture.clear();
  for (let i = 1; i <= 10; i++) fixture.add(i);
});
```

#### `afterEach`

```ts
afterEach(() => {
  fixture = new Set([1, 2, 3, 4]);
});
```

#### `describe`

#### `it`

> **Source**: [**`std@0.160.0/testing/bdd.ts`**](https://deno.land/std@0.160.0/testing/bdd.ts)

### **mock**

```ts
import "https://deno.land/x/this@0.160.1/testing/mock.ts";
```

> **Source**: [**`std@0.160.0/testing/mock.ts`**](https://deno.land/std@0.160.0/testing/mock.ts)

### **snapshot**

```ts
import "https://deno.land/x/this@0.160.1/testing/snapshot.ts";
```

> **Source**: [**`std@0.160.0/testing/snapshot.ts`**](https://deno.land/std@0.160.0/testing/snapshot.ts)

### **chai**

```ts
import "https://deno.land/x/this@0.160.1/testing/chai.ts";
```

> **Source**: [**`chai@4.3.4`**]()

### **fc** (fastcheck)

```ts
import "https://deno.land/x/this@0.160.1/testing/fc.ts";
```

> **Source**: [**`fast-check@3.2.0`**](https://github.com/dubzzz/fast-check#readme)

---

## **examples**

### `JSONC`, `JSON5`, `YAML`, `TOML`

Now you can use `CSV`, `JSON5`, `JSONC`, `YAML`, `TOML` (and more), just as easily as you would use JavaScript's builtin `JSON` object. Check it out below.

```ts
import "https://deno.land/x/this@0.160.1/encoding.ts";

// deno.jsonc => { "compilerOptions": { "lib": ["deno.ns", "deno.window"] }, ... }
const deno_jsonc = JSONC.parse(await Deno.readTextFile("./deno.jsonc"));
// { compilerOptions: { lib: ["deno.ns", "deno.window"] }, ... }

const deno_json5 = JSON5.stringify(deno_jsonc);
// {compilerOptions:{lib:['deno.ns','deno.window']}, ... }

const deno_toml = TOML.stringify(deno_jsonc);
// [compilerOptions.lib] = ["deno.ns", "deno.window"]

const deno_yml = YAML.stringify(deno_jsonc);
// compilerOptions:
//   lib: [deno.ns, deno.window]
```

### `FrontMatter.extract`

```ts
import "https://deno.land/x/this@0.160.1/testing/asserts.ts";
import "https://deno.land/x/this@0.160.1/encoding/front_matter.ts";

const { attrs, body, frontMatter } = FrontMatter.extract<{ title: string }>(
  "---\ntitle: Three dashes marks the spot\n---\n");

assertEquals(attrs.title, "Three dashes marks the spot");
assertEquals(body, "");
assertEquals(frontMatter, "title: Three dashes marks the spot");
```

### `describe` + `it`

```ts
import "https://deno.land/x/this@0.160.1/testing/bdd.ts";

let users: Map<string, unknown>;

// globally available hooks! 
// (beforeAll, afterAll, beforeEach, afterEach)
beforeEach(() => {
  users = new Map<string, unknown>();
});

// behavior-driven development (bdd) testing API
describe("Users Map", () => {

  it("should initially empty", () => {
    assertEquals(users.size, 0);
  });

  it("should be readable and writable", () => {
    users.set("key", "value");
    assertEquals(users.size, 1);
    assertArrayIncludes([...users.values()], ["value"]);
  });

});
```

### `assertEquals` + `AssertionError`

```ts
import "https://deno.land/x/this@0.160.1/testing/asserts.ts";

Deno.test("Global Assertions", async ({ step }) => {

  await step("are they equal?", () =>
    assertEquals(+new Date("1970-01-01T00:00:00.000Z"), 0);

  await step("AssertionError also available", () => {
    if (1 !== 1) {
      throw new AssertionError("OH NO! 1 != 1?!?! BAD JUJU")
    }
  });
});
```

### **`chai`** (chai.js)

```ts
import "https://deno.land/x/this@0.160.1/testing/chai.ts";
```

### **`fc`**

```ts
import "https://deno.land/x/this@0.160.1/testing/fc.ts";
```

---  

## Contributing

### ⚠️ Fixing a bug? Create an Issue first<!--omit from toc-->

> Unless you're fixing a bug for which an issue already exists!

This allows the issue to be connected to your Pull Request, creating a permanent record of your contribution to the project. It also helps maintainers with tracking project progression.

Creating an issue also ensures you're given credit for fixing that bug. 😁

---

### Fork + clone the repository<!--omit from toc-->

> **Note**: This section assumes you have [**the GitHub CLI**][gh]. You should get it.

```sh
gh repo fork deno911/this --clone
```

### Create a new branch for your changes<!--omit from toc-->

```sh
git checkout -b fix/typo-in-readme
```

### Make small changes and concise commits<!--omit from toc-->

```sh
# hack hack hack...

git commit README.md -m "fix: typos in README.md" && git push
```

> **Note**: keep the scope of your changes relevant and concise.

### Open a Pull Request<!--omit from toc-->

```sh
gh pr create --title "fix: typos in README.md"
```

**Or just open your repo on GitHub.com and follow the prompts.**

> **Warning**: make sure you select the upstream repo for your PR!

<br>

---

<div align="center">

## [🅓🅔🅝🅞⑨①①][deno911] <!-- omit in toc -->

###### The foundation of this module was inspired by [ije/global][ije]. <!-- omit in toc -->

</div>

[ije]: https://github.com/ije/global "The foundation of this module was inspired by ije/global"
[deno911]: https://github.com/deno911 "Projects by deno911 on GitHub"
[gh]: https://cli.github.com
[this]: https://deno.land/x/this "View deno911/this on deno.land/x"
[banner-img]: https://raw.githubusercontent.com/deno911/.github/main/static/this/banner.png "deno911/this - Extend Deno's globals with std/encoding & std/testing tools"