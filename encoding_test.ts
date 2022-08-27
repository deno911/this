import "./testing.ts";
import "./encoding.ts";

Deno.test("jsonc test", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});
