import { mock } from "../deps.ts";

const {
  resolvesNext: mockResolvesNext,
  restore: mockRestore,
  ...$mock
} = mock;

declare global {
  const MockError: typeof mock.MockError;
  const assertSpyCall: typeof mock.assertSpyCall;
  const assertSpyCallArg: typeof mock.assertSpyCallArg;
  const assertSpyCallArgs: typeof mock.assertSpyCallArgs;
  const assertSpyCallAsync: typeof mock.assertSpyCallAsync;
  const assertSpyCalls: typeof mock.assertSpyCalls;
  const mockSession: typeof mock.mockSession;
  const mockSessionAsync: typeof mock.mockSessionAsync;
  const mockResolvesNext: typeof mock.resolvesNext;
  const mockRestore: typeof mock.restore;
  const returnsArg: typeof mock.returnsArg;
  const returnsArgs: typeof mock.returnsArgs;
  const returnsNext: typeof mock.returnsNext;
  const returnsThis: typeof mock.returnsThis;
  const spy: typeof mock.spy;
  const stub: typeof mock.stub;

  interface Spy extends mock.Spy {}
  interface SpyCall extends mock.SpyCall {}
  interface ExpectedSpyCall extends mock.ExpectedSpyCall {}
  interface Stub extends mock.Stub {}
}

Object.assign(globalThis, $mock, { mockResolvesNext, mockRestore });
