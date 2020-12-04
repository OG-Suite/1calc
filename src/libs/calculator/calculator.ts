import { Lexer } from './lexer'
import { Operation, Operator } from './operation'
import { Parser } from './parser'
import { Token, TokenType } from './tokens'

export class Calculator {
  private readonly _history: Calcul[]

  get history (): Calcul[] {
    return [...this.history]
  }

  constructor () {
    this._history = []
  }

  compute (calcul: string): number {
    if (this._history.length !== 0 && calcul.startsWith(this._history[this._history.length - 1].src)) {
      this._history[this._history.length - 1].src = calcul
      return this.performCompute(this._history[this._history.length - 1].RPN)
    }

    const c = new Calcul(calcul)
    this._history.push(c)
    c.init()

    return this.performCompute(c.RPN)
  }

  private performCompute (rpn: Array<number|Operation>): number {
    const op = rpn.pop()

    if (op instanceof Operator) {
      const right = this.performCompute(rpn)
      const left = this.performCompute(rpn)

      return op.do(left, right)
    } else if (typeof op === 'number') {
      return op
    } else {
      throw new Error('unsupported operation')
    }
  }
}

class Calcul {
  private _src: string
  private tokens: Token[]
  private rpn: Array<number|Operation>

  get src (): string {
    return this._src
  }

  set src (src: string) {
    if (this.src.startsWith(src) || this.tokens.length === 0) {
      this.lex(src.slice(this._src.length - src.length))
      this.parse()
    } else {
      this.tokens = []
      this.lex(src)
      this.parse()
    }

    this._src = src
  }

  get RPN (): Array<number|Operation> {
    return this.rpn
  }

  constructor (src: string) {
    this._src = src
    this.tokens = []
    this.rpn = []
  }

  init (): void {
    this.src = this._src
  }

  private lex (src: string): void {
    const l = new Lexer(src)
    let token: Token
    do {
      token = l.lex()
      this.tokens.push(token)
    } while (token.type !== TokenType.EOF)
  }

  private parse (): void {
    const p = new Parser()

    for (const token of this.tokens) {
      p.parse(token)
    }

    this.rpn = p.result
  }
}
