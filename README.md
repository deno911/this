<!-- deno-fmt-ignore-file -->
# [![deno911/this](https://migo.deno.dev/img.png?titleFontFamily=monospace&titleFontSize=100&titleFontWeight=100&&titleTextAnchor=left&titleX=60&titleY=150&subtitleFontSize=27&subtitleFontWeight=100&subtitleFontFamily=monospace&subtitleTextAnchor=middle&subtitleX=500&subtitleY=260&width=1000&height=300&bgColor=111827&titleColor=c0ff3e&subtitleColor=fff&iconW=150&iconH=150&iconX=820&iconY=30&borderRadius=20&icon=fluent-emoji:sauropod&pxRatio=1.5&title=this&subtitle=extends+globalThis+with+std%2ftesting+%26+std%2fencoding+tools "deno911/this - extend globalThis with std/testing and std/encoding tools")](https://deno.land/x/this "deno911/this - extend globalThis with std/testing and std/encoding tools")

`this` uses **side-effect imports**: by simply importing the filename, all methods are immediately available to your project. **Please be mindful - this is experimental!**

# Usage

```ts
import "https://deno.land/x/this@0.160.0/mod.ts";
```

> **Warning**: this exposes **everything** globally. **Not recommended**.
> Instead, import only the section/subsection that fits your needs.

---  

<details><summary><strong><u>Table of Contents</u></strong></summary><br>

- [**encoding**](#encoding)
  - [**`CSV`**](#csv)
  - [**`JSONC`**](#jsonc)
  - [**`JSON5`**](#json5)
  - [**`JSONStream`**](#jsonstream)
  - [**`TOML`**](#toml)
  - [**`YAML`**](#yaml)
  - [**`FrontMatter`**](#frontmatter)
  - [**`base64`**](#base64)
  - [**`base64url`**](#base64url)
  - [**`binary`**](#binary)
  - [**`Hex`**](#hex)
- [**testing**](#testing)
  - [**`asserts`**](#asserts)
  - [**`bdd`**](#bdd)
  - [**`mock`**](#mock)
  - [**`snapshot`**](#snapshot)
  - [Third Party](#third-party)
- [**examples**](#examples)
  - [`JSONC`, `JSON5`, `YAML`, `TOML`, ...](#jsonc-json5-yaml-toml-)
  - [`FrontMatter.extract`](#frontmatterextract)
  - [`describe` + `it`](#describe--it)
  - [`assertEquals` + `AssertionError`](#assertequals--assertionerror)
  - [**`chai`** (chai.js)](#chai-chaijs)
  - [**`fc`** (fastcheck)](#fc-fastcheck)
- [Contributing](#contributing)
  - [⚠️ Fixing a bug? Create an Issue first](#️-fixing-a-bug-create-an-issue-first)
  - [Fork + clone the repository](#fork--clone-the-repository)
  - [Create a new branch for your changes](#create-a-new-branch-for-your-changes)
  - [Make small changes and concise commits](#make-small-changes-and-concise-commits)
  - [Open a Pull Request](#open-a-pull-request)
  - [🅓🅔🅝🅞⑨①①](#)

</details>

## **encoding**

`this/encoding` exposes all the [`std/encoding`](https://deno.land/std/encoding) modules from the
Deno Standard Library, along with a few extra goodies too.

```ts
import "https://deno.land/x/this@0.160.0/encoding.ts";
```

### **`CSV`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/csv.ts";
```

#### `.parse`

```ts
CSV.parse(text: string, options?: CSV.ParseOptions): string[][];
CSV.parse(text: string, { columns?: CSV.Column[]; }): Record<string, unknown>;
```

#### `.stringify`

```ts
CSV.stringify(data: CSV.DataItem[], options?: CSV.StringifyOptions): string;
```

> **Source**: [std@0.160.0/encoding/csv.ts](https://deno.land/std@0.160.0/encoding/csv.ts)

### **`JSONC`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/jsonc.ts";
```

#### `.parse`

```ts
JSONC.parse(data: string, { allowTrailingComma?: boolean }): JsonValue;
```

#### `.stringify`

```ts
JSONC.stringify(data: JsonValue, replacer?: (key: string, value: any) => any, space?: string | number): string;

// overload #1:
JSONC.stringify(data: JsonValue, replacer?: (string | number)[], space?: string | number): string;
```

> **Source**: [std@0.160.0/encoding/jsonc.ts](https://deno.land/std@0.160.0/encoding/jsonc.ts)

### **`JSON5`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/json5.ts";
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

### **`JSONStream`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/jsonstream.ts";
```

```ts
interface JSONStream {
    Parse: typeof JsonParseStream;
    Stringify: typeof JsonStringifyStream;
    Concatenated: typeof ConcatenatedJsonParseStream;
    useParse({ writableStrategy, readableStrategy }: ParseStreamOptions): JsonParseStream;
    useStringify({ writableStrategy, readableStrategy, prefix, suffix, }: StringifyStreamOptions): JsonStringifyStream;
    useConcat({ writableStrategy, readableStrategy }: ParseStreamOptions): ConcatenatedJsonParseStream;
}
```

> **Note**: see [**std/encoding/json/stream.ts**](https://deno.land/std@0.160.0/encoding/json/stream.ts) for more info on JSONStream classes.

### **`TOML`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/toml.ts";
```

#### `.parse`

```ts
TOML.parse(text: string): Record<string, unknown>;
```

#### `.stringify`

```ts
TOML.stringify(data: Record<string, unknown>, options: TOML.FormatOptions): string;
```

> **Source**: [std@0.160.0/encoding/toml.ts](https://deno.land/std@0.160.0/encoding/toml.ts)

### **`YAML`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/yaml.ts";
```

#### `.parse`

```ts
YAML.parse() // TODO
```

#### `.parseAll`

```ts
YAML.parseAll() // TODO
```

#### `.stringify`

```ts
YAML.stringify() // TODO
```

> **Source**: [std@0.160.0/encoding/yaml.ts](https://deno.land/std@0.160.0/encoding/yaml.ts)


### **`FrontMatter`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/front_matter.ts";
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

> **Source**: [std@0.160.0/encoding/front_matter.ts](https://deno.land/std@0.160.0/encoding/front_matter.ts)

---

### **`base64`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/base64.ts";
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

> **Source**: [`std@0.160.0/encoding/base64.ts`](https://deno.land/std@0.160.0/encoding/base64.ts)

---  

### **`base64url`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/base64url.ts";
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

> **Source**: [std@0.160.0/encoding/base64url.ts](https://deno.land/std@0.160.0/encoding/base64url.ts)

### **`binary`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/binary.ts";
```

#### `binary.*`

> `TODO`: see [std@0.160.0/encoding/binary.ts](https://deno.land/std/encoding/binary.ts) for available methods


### **`Hex`**

```ts
import "https://deno.land/x/this@0.160.0/encoding/hex.ts";
```

#### `.encode`

```ts
Hex.encode(); // TODO
```

#### `.decode`

```ts
Hex.decode(); // TODO
```

> **Source**: [std@0.160.0/encoding/hex.ts](https://deno.land/std@0.160.0/encoding/hex.ts)

---

## **testing**

```ts
import "https://deno.land/x/this@0.160.0/testing.ts";
```

### **`asserts`**

```ts
import "https://deno.land/x/this@0.160.0/testing/asserts.ts";
```

> **Source**: [std/testing/asserts.ts](https://deno.land/std/testing/asserts.ts)

---

### **`bdd`**

```ts
import "https://deno.land/x/this@0.160.0/testing/bdd.ts";
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

> **Source**: [std/testing/bdd.ts](https://deno.land/std/testing/bdd.ts)

### **`mock`**

```ts
import "https://deno.land/x/this@0.160.0/testing/mock.ts";
```

> **Source**: [std/testing/mock.ts](https://deno.land/std/testing/mock.ts)

### **`snapshot`**

```ts
import "https://deno.land/x/this@0.160.0/testing/snapshot.ts";
```

> **Source**: [std/testing/snapshot.ts](https://deno.land/std/testing/snapshot.ts)

---

### Third Party

> **Note**: starting in `0.160.0`, **chai** and **fastcheck** have been 
> excluded from the `./testing.ts` file due to their large file size.
> Please import them from their respective files instead. If you **really**
> want to import ***all*** of the testing tools at once, you can use the 
> newly created file at `./testing/all.ts` instead.

#### **`chai`**

```ts
import "https://deno.land/x/this@0.160.0/testing/chai.ts";
```

> **Source**: [**`chai@4.3.4`**]()

#### **`fc`** (fastcheck)

```ts
import "https://deno.land/x/this@0.160.0/testing/fc.ts";
```

> **Source**: [**`fast-check@3.2.0`**](https://github.com/dubzzz/fast-check#readme)

---

## **examples**

### `JSONC`, `JSON5`, `YAML`, `TOML`, ...

Now you can use `CSV`, `JSON5`, `JSONC`, `YAML`, `TOML` (and more), just as easily as you would use JavaScript's builtin `JSON` object. Check it out below.

```ts
import "https://deno.land/x/this@0.160.0/encoding.ts";

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
import "https://deno.land/x/this@0.160.0/testing/asserts.ts";
import "https://deno.land/x/this@0.160.0/encoding/front_matter.ts";

const { attrs, body, frontMatter } = FrontMatter.extract<{ title: string }>(
  "---\ntitle: Three dashes marks the spot\n---\n");

assertEquals(attrs.title, "Three dashes marks the spot");
assertEquals(body, "");
assertEquals(frontMatter, "title: Three dashes marks the spot");
```

### `describe` + `it`

```ts
import "https://deno.land/x/this@0.160.0/testing/bdd.ts";

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
import "https://deno.land/x/this@0.160.0/testing/asserts.ts";

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
import "https://deno.land/x/this@0.160.0/testing/chai.ts";
```

### **`fc`** (fastcheck)

```ts
import "https://deno.land/x/this@0.160.0/testing/fc.ts";
```

---  

## Contributing

### ⚠️ Fixing a bug? Create an Issue first

> Unless you're fixing a bug for which an issue already exists!

This allows the issue to be connected to your Pull Request, creating a permanent record of your contribution to the project. It also makes it easier for maintainers to track project progression.

Creating an issue also ensures you're given credit for fixing that bug. 😁

---

### Fork + clone the repository

> This section assumes you have [**the GitHub CLI**][gh] (you ***really* should**).

```sh
gh repo fork deno911/this --clone
```

### Create a new branch for your changes

```sh
git checkout -b fix/typo-in-readme
```

### Make small changes and concise commits

```sh
# hack hack hack...

git commit README.md -m "fix: typos in README.md" && git push
```

> **Note**: keep the scope of your changes relevant and concise.

### Open a Pull Request

```sh
gh pr create --title "fix: typos in README.md"
```

**Or just open your repo on GitHub.com and follow the prompts.**

> **Warning**: make sure you select the upstream repo for your PR!

<br>

---

<div align="center">

The foundation of this module was inspired by [ije/global](https://github.com/ije/global).

### [🅓🅔🅝🅞⑨①①][deno911]

</div>

[deno.land]: https://deno.land "Deno.land - Official Module Registry"
[nest.land]: https://nest.land "Nest.land - Immutable Module Registry"
[Arweave blockchain]: https://arweave.org "Arweave Blockchain"
[deno911]: https://github.com/deno911 "Projects by deno911 on GitHub"
[gh]: https://cli.github.com
