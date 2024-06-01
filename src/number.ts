export class NotValidNumberError extends Error {}

export function isNumber(inp: any): inp is number {
  return typeof inp === 'number';
}
