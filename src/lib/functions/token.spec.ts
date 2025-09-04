import { Token } from '../decorators/token.decorator'
import { token } from './token';

describe('token', () => {
  it('should return the token', () => {
    @Token('foo')
    class Foo { }

    expect(token(Foo)).toBe('foo')
  })

  it('should work with properties', () => {
    class Foo {
      @Token('foo')
      foo: string;
    }

    expect(token(Foo, 'foo')).toBe('foo')
  })

  it('should work with methods', () => {
    class Foo {
      @Token('foo')
      foo() {

      }
    }

    expect(token(Foo, 'foo')).toBe('foo')
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Token('bar') bar: string) {

      }
    }

    expect(token(Foo, 'foo', 0)).toBe('bar')
  })
})