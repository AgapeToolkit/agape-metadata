import { Noun } from '../decorators/noun.decorator'
import { noun } from './noun';

describe('noun', () => {
  it('should return the noun', () => {
    @Noun('foo')
    class Foo { }

    expect(noun(Foo)).toBe('foo')
  })

  it('should work with properties', () => {
    class Foo {
      @Noun('foo')
      foo: string;
    }

    expect(noun(Foo, 'foo')).toBe('foo')
  })

  it('should work with methods', () => {
    class Foo {
      @Noun('foo')
      foo() {

      }
    }

    expect(noun(Foo, 'foo')).toBe('foo')
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Noun('bar') bar: string) {

      }
    }

    expect(noun(Foo, 'foo', 0)).toBe('bar')
  })
})