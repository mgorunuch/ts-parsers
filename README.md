# ts-parsers

This is a TypeScript library that provides utility functions for parsing.

## Installation
You can install this package using npm:
```bash
npm install ts-parsers
```

## Usage

### `bool`
The `bool` function parses a string into a boolean value. It returns `true` if the string is `'true'` (case-insensitive), and `false` otherwise.

```typescript
import { boolParse, parser } from 'ts-parsers';

// boolParse and parser.bool are equivalent
type valid  = AnyCase<'true' | 'false'> | boolean | 1 | 2;
type invalid = null | undefined | not valid;

// throws error if the string is not possible to parse
parser.bool.req('true'); // true
parser.bool.req('ssss'); // throws error

// returns undefined if the string is not possible to parse
parser.bool('true'); // true
parser.bool('ssss'); // undefined
```

### `int`
The `int` function parses a string into an integer value. It returns the integer value if the string is a valid integer, and throws an error otherwise.

```typescript
import { intParse, parser } from 'ts-parsers';

// intParse and parser.int are equivalent
type valid  = string satisfies Integer | number;
type invalid = null | undefined | not valid;

// throws error if the string is not possible to parse
parser.int.req('123'); // 123
parser.int.req('ssss'); // throws error

// returns undefined if the string is not possible to parse
parser.int('123'); // 123
parser.int('ssss'); // undefined
```

### `float`
The `float` function parses a string into a floating-point value. It returns the floating-point value if the string is a valid number, and throws an error otherwise.

```typescript
import { floatParse, parser } from 'ts-parsers';

// floatParse and parser.float are equivalent
type valid  = string satisfies Float | number;
type invalid = null | undefined | not valid;

// throws error if the string is not possible to parse
parser.float.req('123.45'); // 123.45
parser.float.req('ssss'); // throws error

// returns undefined if the string is not possible to parse
parser.float('123.45'); // 123.45
parser.float('ssss'); // undefined
```
### `str`
The `str` function parses a string into a string value. It returns the string value if the string is a valid string, and throws an error otherwise.

```typescript
import { strParse, parser } from 'ts-parsers';

// strParse and parser.str are equivalent
type validStrings = string | number | any implements { toString(): string };
type invalidStrings = null | undefined | not ValidStrings;

// throws error if the string is not possible to parse
parser.str.req('' as any)
strParse.req('' as any)

// returns undefined if the string is not possible to parse
parser.str('' as any)
strParse('' as any)
```

### `str.typed`
The `str.typed` function parses a string into a string value. It returns the string value if the string is a valid string, and throws an error otherwise.

```typescript
type Currency = 'USD' | 'EUR' | 'JPY';
function isCurrency(value: string): value is Currency {
  return ['USD', 'EUR', 'JPY'].includes(value);
}

import { strParse, parser } from 'ts-parsers';

type validStrings = string satisfies Currency;
type invalidStrings = null | undefined | not ValidStrings;

// throws error if the string is not possible to parse
parser.str.typed.req('USD', isCurrency)
strParse.typed.req('USD', isCurrency)

// returns undefined if the string is not possible to parse
parser.str.typed('USD', isCurrency)
strParse.typed('USD', isCurrency)
```
