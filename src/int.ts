import {isNumber, NotValidNumberError} from "./number";

export function intParse(inp: any): number | undefined {
  if (inp === null || inp === undefined) return undefined;
  if (typeof inp === 'number') return inp;
  if (typeof inp === 'string') {
    const res = parseInt(inp, 10);
    if (!isFinite(res) || isNaN(res)) return undefined;
    return res;
  }
  return undefined;
}

function reqIntParse(inp: any): number {
  const res = intParse(inp);
  if (res === undefined) throw new NotValidNumberError('not a number');
  return res;
}

intParse.req = reqIntParse;
intParse.is = isNumber;

export type IntParser = {
  (inp: any): number | undefined;
  is(inp: any): inp is number;
  req(inp: any): number;
};

(intParse satisfies IntParser);
