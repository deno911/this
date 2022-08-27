import { mock } from "../deps.ts";

Object.assign(globalThis, mock);

declare global {
  const MockError: typeof mock.MockError;
  const assertSpyCall: typeof mock.assertSpyCall;
  const assertSpyCallArg: typeof mock.assertSpyCallArg;
  const assertSpyCallArgs: typeof mock.assertSpyCallArgs;
  const assertSpyCallAsync: typeof mock.assertSpyCallAsync;
  const assertSpyCalls: typeof mock.assertSpyCalls;
  const mockSession: typeof mock.mockSession;
  const mockSessionAsync: typeof mock.mockSessionAsync;
  const resolvesNext: typeof mock.resolvesNext;
  const restore: typeof mock.restore;
  const returnsArg: typeof mock.returnsArg;
  const returnsArgs: typeof mock.returnsArgs;
  const returnsNext: typeof mock.returnsNext;
  const returnsThis: typeof mock.returnsThis;
  const spy: typeof mock.spy;
  const stub: typeof mock.stub;
  type ExpectedSpyCall = mock.ExpectedSpyCall;
  type Spy = mock.Spy;
  type SpyCall = mock.SpyCall;
  type Stub = mock.Stub;
}
