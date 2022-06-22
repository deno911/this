# global

Inject global functions/variables in Deno runtime.

## std/testing

Inject testing helpers defined in below files:

- [asserts.ts](https://deno.land/std/testing/asserts.ts)
- [bdd.ts](https://deno.land/std/testing/bdd.ts)
- [snapshot.ts](https://deno.land/std/testing/snapshot.ts)

```ts
import "https://deno.land/x/global/testing.ts";

Deno.test("url test", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});

describe("User", () => {
  it("users initially empty", () => {
    assertEquals(User.users.size, 0);
  });
});

Deno.test("isSnapshotMatch", async function (t): Promise<void> {
  const a = {
    hello: "world!",
    example: 123,
  };
  await assertSnapshot(t, a);
});
```
