/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

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
    d = new MetadataDescriptor();
    d.label = 'Label';
    d.labels = 'Labels';
    d.noun = 'noun';
    d.nouns = 'nouns';
    d.token = 'token';
    d.tokens = 'tokens';
    d.sensitive = true;
    d.description = 'Description';
    d.example = 'example';

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
      expect(d).toBe(e);

      const f = Reflect.getMetadata('agape:metadata', Foo.prototype);
      expect(f).toBe(e);
    })
    it('should get the same descriptor for a class as it\'s prototype', () => {
      class Foo { }
      d = MetadataDescriptor.for(Foo)

      const e = MetadataDescriptor.for(Foo.prototype);
      expect(d).toBe(e)

      const f = Reflect.getMetadata('agape:metadata', Foo.prototype);
      expect(f).toBe(e);
    })
    it('should get the descriptor for a property', () => {
      class Foo {
        foo!: string;
      }
      d = MetadataDescriptor.for(Foo.prototype, 'foo')

      const e = MetadataDescriptor.for(Foo, 'foo');
      expect(d).toBe(e)

      const f = Reflect.getMetadata('agape:metadata', Foo.prototype, 'foo');
      expect(f).toBe(e);
    })
    it('should get the descriptor for a parameter', () => {
      class Foo {
        foo(param1: string, param2: string) {

        }
      }
      d = MetadataDescriptor.for(Foo.prototype, 'foo', 0)

      const e = MetadataDescriptor.for(Foo, 'foo', 0);
      expect(d).toBe(e)

      const f = Reflect.getMetadata('agape:metadata', Foo.prototype, 'foo:0');
      expect(f).toBe(e);

      const g = MetadataDescriptor.for(Foo, 'foo', 1);
      expect(g).toBeInstanceOf(MetadataDescriptor);

      const h = Reflect.getMetadata('agape:metadata', Foo.prototype, 'foo:1');
      expect(h).toBe(g);

      expect(h).not.toBe(e);
    })
  })
})
