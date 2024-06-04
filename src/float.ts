import { NotValidNumberError } from './number'

export function floatParse(inp: any): number | undefined {
  if (typeof inp === 'number')
    return inp
  if (typeof inp === 'string') {
    const res = Number.parseFloat(inp)
    if (!Number.isFinite(res) || Number.isNaN(res))
      return undefined
    return res
  }
  return undefined
}

function reqFloatParse(inp: any): number {
  const res = floatParse(inp)
  if (res === undefined)
    throw new NotValidNumberError('not a number')
  return res
}

floatParse.req = reqFloatParse

export interface FloatParse {
  (inp: any): number | undefined
  req: (inp: any) => number
}

floatParse satisfies FloatParse
