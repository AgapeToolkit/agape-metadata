/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sensitive } from '../decorators/sensitive.decorator'
import { sensitive } from './sensitive';

describe('sensitive', () => {
  it('should return the sensitive', () => {
    @Sensitive
    class Foo { }

    expect(sensitive(Foo)).toBe(true);
  })

  it('should work with properties', () => {
    class Foo {
      @Sensitive
      foo: string;
    }

    expect(sensitive(Foo, 'foo')).toBe(true);
  })

  it('should work with methods', () => {
    class Foo {
      @Sensitive
      foo() {

      }
    }

    expect(sensitive(Foo, 'foo')).toBe(true);
  })

  it('should work with parameters', () => {
    class Foo {

      foo(@Sensitive bar: string) {

      }
    }

    expect(sensitive(Foo, 'foo', 0)).toBe(true);
  })
})
