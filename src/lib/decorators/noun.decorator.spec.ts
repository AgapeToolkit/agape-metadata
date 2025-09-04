/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';
import { Noun } from './noun.decorator';

describe('Noun', () => {

  it('should decorate a class', () => {
    @Noun('foo')
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.noun).toBe('foo')
  })

  it('should decorate a property', () => {

    class Foo {
      @Noun('foo')
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.noun).toBe('foo')
  })

  it('should decorate a method', () => {

    class Foo {
      @Noun('foo')
      foo() {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.noun).toBe('foo')
  })

  it('should decorate a parameter', () => {

    class Foo {

      foo(@Noun('bar') bar: string) {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo', 0);
    expect(d.noun).toBe('bar');
  })

  it('should set the plural', () => {
    @Noun('foo', 'foos')
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.nouns).toBe('foos')
  })
})
