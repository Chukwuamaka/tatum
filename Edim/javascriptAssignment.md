# JavaScript Iteration & Array/String Methods Cheat Sheet

## Other Ways to Loop / Iterate

Besides the classic `for` loop, JS gives you several other ways to iterate:

- **`for...of`** — iterates over _values_ of an iterable (arrays, strings, Maps, Sets, etc). Best for arrays when you just need the value.
  ```js
  for (const item of [1, 2, 3]) {
    console.log(item);
  }
  ```
- **`for...in`** — iterates over _keys/indexes_ of an object (or array indexes as strings). Mainly for plain objects, not recommended for arrays.
  ```js
  for (const key in { a: 1, b: 2 }) {
    console.log(key);
  }
  ```
- **`while`** — runs as long as a condition is true. Good when you don't know the number of iterations ahead of time.
  ```js
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```
- **`do...while`** — like `while`, but runs the body at least once before checking the condition.
  ```js
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```
- **`.forEach()`** — array method, loops through each element (see below).
- **Array/iterator methods** (`map`, `filter`, `reduce`, etc.) — these also "loop" internally but return something useful instead of just running side effects.

---

## String Methods

| Method                   | What it does                                                                                                   | Mutates original?                          | Return value                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------- |
| **`.trim()`**            | Removes whitespace from both ends of a string                                                                  | ❌ No                                      | New string, trimmed         |
| **`.split(separator)`**  | Breaks a string into an array of substrings based on a separator                                               | ❌ No (works on string, returns new array) | Array of strings            |
| **`.charAt(index)`**     | Returns the character at a given index                                                                         | ❌ No                                      | A single character (string) |
| **`.includes(value)`**   | Checks if a string contains a given substring                                                                  | ❌ No                                      | Boolean (`true`/`false`)    |
| **`.startsWith(value)`** | Checks if a string starts with given characters                                                                | ❌ No                                      | Boolean                     |
| **`.endsWith(value)`**   | Checks if a string ends with given characters                                                                  | ❌ No                                      | Boolean                     |
| **`.join(separator)`**   | _(Array method, not string)_ — joins all array elements into a single string, separated by the given separator | ❌ No                                      | A new string                |

> Strings in JS are **immutable** — no string method ever changes the original string. They all return a new value.

---

## Array Methods

| Method                                | What it does                                                           | Mutates original? | Return value                                            |
| ------------------------------------- | ---------------------------------------------------------------------- | ----------------- | ------------------------------------------------------- |
| **`.push(item)`**                     | Adds one or more items to the **end** of an array                      | ✅ Yes            | New length of the array (a number)                      |
| **`.shift()`**                        | Removes the **first** item from an array                               | ✅ Yes            | The removed item                                        |
| **`.unshift(item)`**                  | Adds one or more items to the **beginning** of an array                | ✅ Yes            | New length of the array (a number)                      |
| **`.indexOf(item)`**                  | Finds the first index where an item matches (strict `===` check)       | ❌ No             | Index (number), or `-1` if not found                    |
| **`.forEach(callback)`**              | Runs a function once for each element (for side effects, like logging) | ❌ No             | `undefined` (always)                                    |
| **`.filter(callback)`**               | Creates a new array with only elements that pass a test                | ❌ No             | New array (filtered subset)                             |
| **`.map(callback)`**                  | Creates a new array by transforming every element                      | ❌ No             | New array (same length, transformed)                    |
| **`.reduce(callback, initialValue)`** | Reduces the array to a single value by accumulating over each element  | ❌ No             | A single value (any type — number, object, array, etc.) |
| **`.some(callback)`**                 | Checks if **at least one** element passes a test                       | ❌ No             | Boolean                                                 |
| **`.every(callback)`**                | Checks if **all** elements pass a test                                 | ❌ No             | Boolean                                                 |
| **`.find(callback)`**                 | Returns the **first element** that passes a test                       | ❌ No             | The found element, or `undefined` if none match         |
| **`.findIndex(callback)`**            | Returns the **index** of the first element that passes a test          | ❌ No             | Index (number), or `-1` if none match                   |

---

## Quick Mental Model

- **Mutating methods** (change the original array in place): `push`, `shift`, `unshift` — plus others not listed here like `pop`, `splice`, `sort`, `reverse`.
- **Non-mutating methods** (always return something new, leave original untouched): everything else in this list — `map`, `filter`, `reduce`, `forEach`, `find`, `findIndex`, `some`, `every`, `indexOf`, and all string methods.

A good rule of thumb: if the method's purpose is to **transform or search** data, it usually returns a new value without touching the original. If its purpose is to **add/remove elements**, it usually mutates.
