declare type JSONReplacerFn = (this: any, key: string, value: any) => any;

declare type JSONReviverFn = (this: any, key: string, value: any) => any;
declare type JSONReviverArray = (string | number)[];

declare type JSONValue =
  | { [key: string]: JSONValue }
  | JSONValue[]
  | string
  | number
  | boolean
  | null;
