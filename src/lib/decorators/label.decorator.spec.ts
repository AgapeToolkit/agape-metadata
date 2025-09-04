/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';
import { Label } from './label.decorator';

describe('Label', () => {

  it('should decorate a class', () => {
    @Label('Foo')
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.label).toBe('Foo')
  })

  it('should decorate a property', () => {

    class Foo {
      @Label('Foo')
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.label).toBe('Foo')
  })

  it('should decorate a method', () => {

    class Foo {
      @Label('Foo')
      foo() {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.label).toBe('Foo')
  })

  it('should decorate a parameter', () => {

    class Foo {

      foo(@Label('Bar') bar: string) {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo', 0);
    expect(d.label).toBe('Bar');
  })

  it('should set the plural', () => {
    @Label('Foo', 'Foos')
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.labels).toBe('Foos')
  })
})
