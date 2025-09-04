import { Description } from '../decorators/description.decorator'
import { description } from './description';

describe('description', () => {
  it('should return the description', () => {
    @Description('description')
    class Foo { }

    expect(description(Foo)).toBe('description')
  })

  it('should work with properties', () => {
    class Foo {
      @Description('description')
      foo: string;
    }

    expect(description(Foo, 'foo')).toBe('description')
  })

  it('should work with methods', () => {
    class Foo {
      @Description('description')
      foo() {

      }
    }

    expect(description(Foo, 'foo')).toBe('description')
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Description('description') bar: string) {

      }
    }

    expect(description(Foo, 'foo', 0)).toBe('description')
  })
})