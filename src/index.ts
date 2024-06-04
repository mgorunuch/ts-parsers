import { floatParse } from './float'

import { intParse } from './int'

import { strParse } from './string'

import { boolParse } from './bool'

import { dateParse } from './date'

export * from './float'
export * from './int'
export * from './string'
export * from './bool'
export * from './date'

export const parser = {
  bool: boolParse,
  int: intParse,
  float: floatParse,
  str: strParse,
  date: dateParse,
}
