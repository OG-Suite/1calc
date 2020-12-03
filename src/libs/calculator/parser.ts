/* eslint-disable no-case-declarations */
import { Constant, CONSTANTS } from './constant'
import { Token, TokenType } from './tokens'
import { OPERATIONS, Operation, Operator, Parenthesis } from './operation'

class InvalidTokenError extends Error {
  constructor (token: Token) {
    super(`${token.start}|${token.end} - "${token.value}" is not a valid token.`)
  }
}

class UnkownIdentifierError extends Error {
  constructor (token: Token) {
    super(`${token.start}|${token.end} - "${token.value}" is not a known identifier.`)
  }
}

class UnkownOperatorError extends Error {
  constructor (token: Token) {
    super(`${token.start}|${token.end} - "${token.value}" is not a known operator.`)
  }
}

// Parser implements the Shunting-yard algorithm
// See https://en.wikipedia.org/wiki/Shunting-yard_algorithm
export class Parser {
  private readonly output: Array<Constant|number|Operation>
  private readonly operation: Operation[]

  get result (): Array<Constant|number|Operation> {
    return [...this.output]
  }

  constructor () {
    this.output = []
    this.operation = []
  }

  parse (token: Token): void {
    switch (token.type) {
      case TokenType.EOF:
        while (this.operation.length !== 0) {
          this.output.push(this.operation.pop() as Operation)
        }
        return

      case TokenType.ILLEGAL:
        throw new InvalidTokenError(token)

      case TokenType.NUMBER:
        this.output.push(parseFloat(token.value))
        break

      case TokenType.IDENT:
        const constant = CONSTANTS.get(token.value)
        if (constant !== undefined) {
          this.output.push(constant)
          return
        }

        const func = OPERATIONS.get(token.value)
        if (func !== undefined) {
          this.output.push(func)
          return
        }

        throw new UnkownIdentifierError(token)

      case TokenType.LPAREN:
        this.operation.push(OPERATIONS.get('(') as Parenthesis)
        break

      case TokenType.RPAREN:
        this.parseRightParenthesis(OPERATIONS.get(')') as Parenthesis)
        break

      case TokenType.OPERATOR:
        const op = OPERATIONS.get(token.value)
        if (op !== undefined && op instanceof Operator) {
          this.parseOperator(op)
          return
        }

        throw new UnkownOperatorError(token)
    }

    console.log()
  }

  private get lastOperation (): Operation {
    return this.operation[this.operation.length - 1]
  }

  private parseOperator (op: Operator): void {
    while (
      // there is an operator on the stack
      this.operation.length !== 0 && this.lastOperation instanceof Operator && (
        // the operator at the top of the operator stack has greater precedence
        this.lastOperation.precedence > op.precedence || (
          // the operator at the top of the operator stack has equal precedence and token is left associative
          this.lastOperation.precedence === op.precedence && op.isLeftAssociative)) && (
      // the operator at the top of the operator stack is not a left parenthesis
        !(this.lastOperation instanceof Parenthesis) || !this.lastOperation.isLeft)) {
      this.output.push(this.operation.pop() as Operation)
    }
    this.operation.push(op)
  }

  private parseRightParenthesis (rp: Parenthesis): void {
    while (this.operation.length !== 0 &&
      // the operator at the top of the operator stack is not a left parenthesis
      !(this.lastOperation instanceof Parenthesis && this.lastOperation.isLeft)) {
      this.output.push(this.operation.pop() as Operation)
    }

    if (this.lastOperation instanceof Parenthesis && this.lastOperation.isLeft) {
      this.operation.pop()
    }
  }
}
