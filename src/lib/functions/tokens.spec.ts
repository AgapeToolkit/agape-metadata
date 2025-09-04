import { Token } from '../decorators/token.decorator'
import { tokens } from './tokens';

describe('tokens', () => {
  it('should return the token', () => {
    @Token('foo', 'foos')
    class Foo { }

    expect(tokens(Foo)).toBe('foos')
  })

  it('should work with properties', () => {
    class Foo {
      @Token('foo', 'foos')
      foo: string;
    }

    expect(tokens(Foo, 'foo')).toBe('foos')
  })

  it('should work with methods', () => {
    class Foo {
      @Token('foo', 'foos')
      foo() {

      }
    }

    expect(tokens(Foo, 'foo')).toBe('foos')
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Token('Bar', 'Bars') bar: string) {

      }
    }

    expect(tokens(Foo, 'foo', 0)).toBe('Bars')
  })
})