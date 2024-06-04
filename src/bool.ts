export class NotValidBooleanError extends Error {}

export const boolTrueStrings = ['1', 't', 'true'] as const
const boolTrueStringsUnsafe = boolTrueStrings as unknown as string[]

export const boolFalseStrings = ['0', 'f', 'false'] as const
const boolFalseStringsUnsafe = boolFalseStrings as unknown as string[]

export const boolStrings = [...boolTrueStrings, ...boolFalseStrings]

function parseStrBool(str: string): boolean | undefined {
  if (boolTrueStringsUnsafe.includes(str))
    return true
  if (boolFalseStringsUnsafe.includes(str))
    return false
  return undefined
}

function parseNumberBool(num: number): boolean | undefined {
  if (num === 1)
    return true
  if (num === 0)
    return false
  return undefined
}

export function boolParse(inp: any): boolean | undefined {
  if (typeof inp === 'boolean')
    return inp
  if (typeof inp === 'string')
    return parseStrBool(inp)
  if (typeof inp === 'number')
    return parseNumberBool(inp)
  return undefined
}

boolParse.req = (inp: any) => {
  const res = boolParse(inp)
  if (typeof res !== 'boolean') {
    throw new NotValidBooleanError('Not valid boolean')
  }
  return res
}

boolParse.is = (inp: any): inp is boolean => typeof inp === 'boolean'

interface BoolParse {
  (inp: any): boolean | undefined
  is: (inp: any) => inp is boolean
  req: (inp: any) => boolean
}

boolParse as BoolParse
