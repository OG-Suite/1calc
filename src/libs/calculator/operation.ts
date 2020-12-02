export abstract class Operation {
  abstract do (...args: number[]): number
}

// Function

export const FUNCTIONS = new Map<string, Func>()

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
FUNCTIONS.set('log', new Func((...args: number[]) => Math.log10(args[0])))
FUNCTIONS.set('powten', new Func((...args: number[]) => 10 ** args[0]))

FUNCTIONS.set('ln', new Func((...args: number[]) => Math.log(args[0])))
FUNCTIONS.set('exp', new Func((...args: number[]) => Math.exp(args[0])))

FUNCTIONS.set('sin', new Func((...args: number[]) => Math.sin(args[0])))
FUNCTIONS.set('arcsin', new Func((...args: number[]) => Math.asin(args[0])))

FUNCTIONS.set('cos', new Func((...args: number[]) => Math.cos(args[0])))
FUNCTIONS.set('arccos', new Func((...args: number[]) => Math.acos(args[0])))

FUNCTIONS.set('tan', new Func((...args: number[]) => Math.tan(args[0])))
FUNCTIONS.set('arctan', new Func((...args: number[]) => Math.atan(args[0])))

FUNCTIONS.set('powtwo', new Func((...args: number[]) => args[0] ** 2))
FUNCTIONS.set('sqrt', new Func((...args: number[]) => Math.sqrt(args[0])))

FUNCTIONS.set('fac', new Func((...args: number[]) => factorial(args[0])))

function factorial (a: number): number {
  return a <= 0 ? 1 : a * factorial(a - 1)
}

// Operation

export const OPERATORS = new Map<string, Operator>()

export class Operator extends Operation {
  readonly priority: number
  private readonly op: (a: number, b: number) => number

  constructor (priority: number, op: (a: number, b: number) => number) {
    super()
    this.priority = priority
    this.op = op
  }

  do (...args: number[]): number {
    return this.op(args[0], args[1])
  }
}

OPERATORS.set('+', new Operator(1, (a: number, b: number) => a + b))
OPERATORS.set('-', new Operator(1, (a: number, b: number) => a - b))
OPERATORS.set('/', new Operator(10, (a: number, b: number) => a / b))
OPERATORS.set('*', new Operator(10, (a: number, b: number) => a * b))
