import { Position } from './position'
import { Token, TokenType } from './tokens'

const whitespace = /\s/
const alphabetic = /[a-zA-Z]/
const number = /(\d|\.|-)/
const specialChar = /[!@#$%/^&*+=_-]/

export class Lexer {
  private pos: Position
  private readonly src: string
  private char: string

  constructor (src: string) {
    this.pos = 0
    this.src = src
  }

  private get peek (): string {
    return this.src.charAt(this.pos)
  }

  private readChar (): void {
    this.char = this.src.charAt(this.pos)
    this.pos++
  }

  Lex (): Token {
    while (true) {
      this.readChar()

      if (this.char === '') {
        return {
          type: TokenType.EOF,
          start: this.pos,
          end: this.pos,
          value: ''
        }
      }

      switch (true) {
        case whitespace.test(this.char):
          continue

        case alphabetic.test(this.char):
          return this.lexIdent()

        case number.test(this.char) || (this.char === '.' && number.test(this.peek)):
          return this.lexNumber()

        case this.char === '(':
          return {
            type: TokenType.LPAREN,
            start: this.pos,
            end: this.pos + 1,
            value: this.char
          }

        case this.char === ')':
          return {
            type: TokenType.RPAREN,
            start: this.pos,
            end: this.pos + 1,
            value: this.char
          }

        case specialChar.test(this.char):
          return {
            type: TokenType.OPERATOR,
            start: this.pos,
            end: this.pos + 1,
            value: this.char
          }

        default:
          return {
            type: TokenType.ILLEGAL,
            start: this.pos,
            end: this.pos,
            value: this.char
          }
      }
    }
  }

  private lexIdent (): Token {
    const result: Token = {
      type: TokenType.IDENT,
      start: this.pos,
      end: 0,
      value: this.char
    }

    while (alphabetic.test(this.peek)) {
      this.readChar()
      result.value += this.char
    }
    result.end = this.pos

    return result
  }

  private lexNumber (): Token {
    const result: Token = {
      type: TokenType.NUMBER,
      start: this.pos,
      end: 0,
      value: this.char
    }

    while (number.test(this.peek) || this.peek === '.') {
      if (this.peek === '.' && result.value.includes('.')) {
        break
      }

      this.readChar()
      result.value += this.char
    }
    result.end = this.pos + 1

    return result
  }
}
