import { MetadataDescriptor } from '../descriptors/metadata.descriptor';
import { Description } from './description.decorator';

describe('Description', () => {

  it('should decorate a class', () => {
    @Description('This is a class')
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.description).toBe('This is a class')
  })

  it('should decorate a property', () => {

    class Foo {
      @Description('This is a property')
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.description).toBe('This is a property')
  })

  it('should decorate a method', () => {

    class Foo {
      @Description('This is a method')
      foo() {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.description).toBe('This is a method')
  })

  it('should decorate a parameter', () => {

    class Foo {

      foo(@Description('This is a parameter') bar: string) {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo', 0);
    expect(d.description).toBe('This is a parameter');
  })
})
