import { bdd } from "../deps.ts";

Object.assign(globalThis, bdd);

declare global {
  const afterAll: typeof bdd.afterAll;
  const afterEach: typeof bdd.afterEach;
  const beforeAll: typeof bdd.beforeAll;
  const beforeEach: typeof bdd.beforeEach;
  const describe: typeof bdd.describe;
  const it: typeof bdd.it;
}
