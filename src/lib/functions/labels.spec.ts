/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label } from '../decorators/label.decorator'
import { labels } from './labels';

describe('labels', () => {
  it('should return the label', () => {
    @Label('Foo', 'Foos')
    class Foo { }

    expect(labels(Foo)).toBe('Foos')
  })

  it('should work with properties', () => {
    class Foo {
      @Label('Foo', 'Foos')
      foo: string;
    }

    expect(labels(Foo, 'foo')).toBe('Foos')
  })

  it('should work with methods', () => {
    class Foo {
      @Label('Foo', 'Foos')
      foo() {

      }
    }

    expect(labels(Foo, 'foo')).toBe('Foos')
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Label('Bar', 'Bars') bar: string) {

      }
    }

    expect(labels(Foo, 'foo', 0)).toBe('Bars')
  })
})
