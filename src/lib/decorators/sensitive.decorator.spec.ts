import { MetadataDescriptor } from '../descriptors/metadata.descriptor';
import { Sensitive } from './sensitive.decorator';

describe('Label', () => {

  it('should decorate a class', () => {
    @Sensitive
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.sensitive).toBe(true)
  })
  it('should set sensitive to false', () => {
    @Sensitive(false)
    class Foo {
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo)
    expect(d.sensitive).toBe(false)
  })

  it('should decorate a property', () => {

    class Foo {
      @Sensitive
      foo: string;
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.sensitive).toBe(true)
  })

  it('should decorate a method', () => {

    class Foo {
      @Sensitive
      foo() {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo')
    expect(d.sensitive).toBe(true)
  })

  it('should decorate a parameter', () => {

    class Foo {

      foo(@Sensitive bar: string) {

      }
    }

    const d = MetadataDescriptor.for(Foo, 'foo', 0);
    expect(d.sensitive).toBe(true);
  })
})
