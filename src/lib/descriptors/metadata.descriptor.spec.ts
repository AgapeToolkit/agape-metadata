import { MetadataDescriptor } from './metadata.descriptor';

describe('MetadataDescriptor', () => {

  let d: MetadataDescriptor | undefined;

  beforeEach(() => {
    d = undefined;
  })

  it('should instantiate', () => {
    d = new MetadataDescriptor();
  })

  it('should set some properties', () => {
    d = new MetadataDescriptor('TestName');
    d.label = 'Label';
    d.labels = 'Labels';
    d.noun = 'noun';
    d.nouns = 'nouns';
    d.token = 'token';
    d.tokens = 'tokens';
    d.sensitive = true;
    d.description = 'Description';
    d.example = 'example';

    expect(d.name).toEqual('TestName');
    expect(d.label).toEqual('Label');
    expect(d.labels).toEqual('Labels');
    expect(d.noun).toEqual('noun');
    expect(d.nouns).toEqual('nouns');
    expect(d.token).toEqual('token');
    expect(d.tokens).toEqual('tokens');
    expect(d.sensitive).toEqual(true);
    expect(d.example).toEqual('example');
    expect(d.description).toEqual('Description');
  })

  describe('for', () => {
    it('should get the descriptor for a class', () => {
      class Foo { }
      d = MetadataDescriptor.for(Foo)

      const e = MetadataDescriptor.for(Foo);
      expect(d).toBe(e)
    })
    it('should automatically set name for class', () => {
      class Foo { }
      d = MetadataDescriptor.for(Foo)
      expect(d.name).toEqual('Foo')
    })
    it('should automatically set name for property', () => {
      class Foo {
        bar!: string;
      }
      d = MetadataDescriptor.for(Foo, 'bar')
      expect(d.name).toEqual('bar')
    })
    it('should not set name for parameter', () => {
      class Foo {
        method(): void {
          // Empty method for testing
        }
      }
      d = MetadataDescriptor.for(Foo, 'method', 0)
      expect(d.name).toBeUndefined()
    })
    it('should get the same descriptor for a class as it\'s prototype', () => {
      class Foo { }
      d = MetadataDescriptor.for(Foo)

      const e = MetadataDescriptor.for(Foo.prototype);
      expect(d).toBe(e)
    })
    it('should get the descriptor for a property', () => {
      class Foo {
        foo!: string;
      }
      d = MetadataDescriptor.for(Foo.prototype, 'foo')

      const e = MetadataDescriptor.for(Foo, 'foo');
      expect(d).toBe(e)
    })
    it('should get the descriptor for a parameter', () => {
      class Foo {
        foo!: string;
      }
      d = MetadataDescriptor.for(Foo.prototype, 'foo', 0)

      const e = MetadataDescriptor.for(Foo, 'foo', 0);
      expect(d).toBe(e)
    })
  })
})
