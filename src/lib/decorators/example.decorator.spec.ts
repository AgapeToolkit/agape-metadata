/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';
import { Example } from './example.decorator';

describe('Example', () => {

  it('should decorate a class', () => {
    @Example({ foo: 'fooooo!!!'})
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.example).toEqual({ foo: 'fooooo!!!' })
  })

  it('should decorate a property', () => {

    class Foo {
      @Example('fooooo!!!')
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.example).toBe('fooooo!!!')
  })

  it('should decorate a method', () => {

    class Foo {
      @Example('fooooo!!!')
      foo() {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.example).toBe('fooooo!!!')
  })

  it('should decorate a parameter', () => {

    class Foo {

      foo(@Example('Barrrghhhh matey') bar: string) {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo', 0);
    expect(d.example).toBe('Barrrghhhh matey');
  })
})
