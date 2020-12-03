export const OPERATIONS = new Map<string, Operation>()

export abstract class Operation {
  abstract do (...args: number[]): number
}

// Function

export class Func extends Operation {
  private readonly fn: (...args: number[]) => number

  constructor (fn: (...args: number[]) => number) {
    super()
    this.fn = fn
  }

  do (...args: number[]): number {
    return this.fn(...args)
  }
}

// Basic functions
OPERATIONS.set('log', new Func((...args: number[]) => Math.log10(args[0])))
OPERATIONS.set('powten', new Func((...args: number[]) => 10 ** args[0]))

OPERATIONS.set('ln', new Func((...args: number[]) => Math.log(args[0])))
OPERATIONS.set('exp', new Func((...args: number[]) => Math.exp(args[0])))

OPERATIONS.set('sin', new Func((...args: number[]) => Math.sin(args[0])))
OPERATIONS.set('arcsin', new Func((...args: number[]) => Math.asin(args[0])))

OPERATIONS.set('cos', new Func((...args: number[]) => Math.cos(args[0])))
OPERATIONS.set('arccos', new Func((...args: number[]) => Math.acos(args[0])))

OPERATIONS.set('tan', new Func((...args: number[]) => Math.tan(args[0])))
OPERATIONS.set('arctan', new Func((...args: number[]) => Math.atan(args[0])))

OPERATIONS.set('powtwo', new Func((...args: number[]) => args[0] ** 2))
OPERATIONS.set('sqrt', new Func((...args: number[]) => Math.sqrt(args[0])))

OPERATIONS.set('fac', new Func((...args: number[]) => factorial(args[0])))
function factorial (a: number): number {
  return a <= 0 ? 1 : a * factorial(a - 1)
}

OPERATIONS.set('max', new Func((...args: number[]) => Math.max(...args)))
OPERATIONS.set('min', new Func((...args: number[]) => Math.min(...args)))

// Operator

export class Operator extends Operation {
  readonly precedence: number
  readonly isLeftAssociative: boolean
  readonly op: (a: number, b: number) => number

  constructor (precedence: number, op: (a: number, b: number) => number, leftAssociative = true) {
    super()
    this.precedence = precedence
    this.op = op

    this.isLeftAssociative = leftAssociative
  }

  do (...args: number[]): number {
    return this.op(args[0], args[1])
  }
}

OPERATIONS.set('+', new Operator(1, (a: number, b: number) => a + b))
OPERATIONS.set('-', new Operator(1, (a: number, b: number) => a - b))
OPERATIONS.set('/', new Operator(10, (a: number, b: number) => a / b))
OPERATIONS.set('*', new Operator(10, (a: number, b: number) => a * b))
OPERATIONS.set('^', new Operator(100, (a: number, b: number) => a ** b, false))

// Parenthesis

class InvalidOperationCallError extends Error {
  constructor (operation: string) {
    super(`operation "${operation}" is not valid`)
  }
}

export class Parenthesis extends Operation {
  readonly isLeft: boolean

  constructor (left: boolean) {
    super()
    this.isLeft = left
  }

  do (...args: number[]): number {
    throw new InvalidOperationCallError(this.isLeft ? '(' : ')')
  }
}

// Parenthesis are stored on the stack operator
OPERATIONS.set('(', new Parenthesis(true))
OPERATIONS.set(')', new Parenthesis(false))
