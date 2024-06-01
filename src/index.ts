import { floatParse } from './float';
export * from './float';

import { intParse } from './int';
export * from './int';

import { strParse } from './string';
export * from './string';

import { boolParse } from './bool';
export * from './bool';

import { dateParse } from './date';
export * from './date';

export const parser = {
  bool: boolParse,
  int: intParse,
  float: floatParse,
  str: strParse,
  date: dateParse,
};
