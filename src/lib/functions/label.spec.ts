/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label } from '../decorators/label.decorator'
import { label } from './label';

describe('label', () => {
  it('should return the label', () => {
    @Label('Foo')
    class Foo { }

    expect(label(Foo)).toBe('Foo')
  })

  it('should work with properties', () => {
    class Foo {
      @Label('Foo')
      foo!: string;
    }

    expect(label(Foo, 'foo')).toBe('Foo')
  })

  it('should work with methods', () => {
    class Foo {
      @Label('Foo')
      foo() {

      }
    }

    expect(label(Foo, 'foo')).toBe('Foo')
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Label('Bar') bar: string) {

      }
    }

    expect(label(Foo, 'foo', 0)).toBe('Bar')
  })
})
