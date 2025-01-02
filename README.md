# TypeScript Type Error: Argument Type Mismatch

This repository demonstrates a common type error in TypeScript where a function is called with arguments of incorrect types.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` offers a corrected version.

## Bug
The `add` function is declared to accept two numbers. However, in the erroneous call, a string is passed as the second argument, causing a type error.  TypeScript's static typing prevents this error from manifesting at runtime, catching it during compilation.

## Solution
The corrected code ensures all arguments passed to functions match their defined types.  Type checking is essential in TypeScript for building robust and reliable applications.