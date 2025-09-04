/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Noun } from '../decorators/noun.decorator'
import { nouns } from './nouns';

describe('nouns', () => {
  it('should return the noun', () => {
    @Noun('foo', 'foos')
    class Foo { }

    expect(nouns(Foo)).toBe('foos')
  })

  it('should work with properties', () => {
    class Foo {
      @Noun('foo', 'foos')
      foo: string;
    }

    expect(nouns(Foo, 'foo')).toBe('foos')
  })

  it('should work with methods', () => {
    class Foo {
      @Noun('foo', 'foos')
      foo() {

      }
    }

    expect(nouns(Foo, 'foo')).toBe('foos')
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Noun('Bar', 'Bars') bar: string) {

      }
    }

    expect(nouns(Foo, 'foo', 0)).toBe('Bars')
  })
})
