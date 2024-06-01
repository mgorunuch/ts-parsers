export class NotValidStringError extends Error {}

export function strParse(inp: any): string | undefined {
  if (inp === undefined || inp === null) return;
  if (typeof inp === 'string') return inp;
  if (typeof inp === 'number') return inp.toString();
  if (inp.hasOwnProperty('toString')) {
    const res = inp.toString();
    if (typeof res === 'string') return res;
  }
  return undefined;
}

function reqStrParse(inp: any): string {
  const res = strParse(inp);
  if (res === undefined) throw new NotValidStringError('not a string');
  return res;
}

function isStr(inp: any): inp is string {
  return typeof inp === 'string';
}

strParse.req = reqStrParse;
strParse.is = isStr;

function typedStrParse<T extends string>(
  inp: any,
  validator: (v: string) => v is T,
): T | undefined {
  const res = strParse(inp);
  if (res === undefined) return undefined;
  if (!validator(res)) return undefined;
  return res;
}

function reqTypedStrParse<T extends string>(
  inp: any,
  validator: (v: string) => v is T,
): T {
  const res = typedStrParse(inp, validator);
  if (res === undefined) {
    throw new NotValidStringError(`${inp} (${typeof inp} ) not a string`);
  }
  return res;
}

typedStrParse.req = reqTypedStrParse;
strParse.typed = typedStrParse;

export type StrParse = {
  (inp: any): string | undefined;
  is(inp: any): inp is string;
  req(inp: any): string;
  typed: {
    <T extends string>(
      inp: any,
      validator: (v: string) => v is T,
    ): T | undefined;
    req<T extends string>(inp: any, validator: (v: string) => v is T): T;
  };
};

(strParse satisfies StrParse);
