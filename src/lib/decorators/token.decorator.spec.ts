/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';
import { Token } from './token.decorator';

describe('Token', () => {

  it('should decorate a class', () => {
    @Token('foo')
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.token).toBe('foo')
  })

  it('should decorate a property', () => {

    class Foo {
      @Token('foo')
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.token).toBe('foo')
  })

  it('should decorate a method', () => {

    class Foo {
      @Token('foo')
      foo() {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.token).toBe('foo')
  })

  it('should decorate a parameter', () => {

    class Foo {

      foo(@Token('bar') bar: string) {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo', 0);
    expect(d.token).toBe('bar');
  })

  it('should set the plural', () => {
    @Token('foo', 'foos')
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.tokens).toBe('foos')
  })
})
