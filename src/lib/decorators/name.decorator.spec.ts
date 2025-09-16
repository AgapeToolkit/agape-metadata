/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Name } from './name.decorator';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

describe('Name', () => {

  it('should set name on class', () => {
    @Name('Product')
    class Product {
      name!: string;
    }

    const descriptor = MetadataDescriptor.for(Product);
    expect(descriptor.name).toEqual('Product');
  });

  it('should set name on property', () => {
    class Product {
      @Name('skuCode')
      sku!: string;
    }

    const descriptor = MetadataDescriptor.for(Product, 'sku');
    expect(descriptor.name).toEqual('skuCode');
  });

  it('should set name on method', () => {
    class ProductService {
      @Name('createProduct')
      create(): void {
        // ...
      }
    }

    const descriptor = MetadataDescriptor.for(ProductService, 'create');
    expect(descriptor.name).toEqual('createProduct');
  });

  it('should set name on parameter', () => {
    class ProductService {
      create(@Name('product') product: any): void {
        // ...
      }
    }

    const descriptor = MetadataDescriptor.for(ProductService, 'create', 0);
    expect(descriptor.name).toEqual('product');
  });

  it('should override automatically set name', () => {
    @Name('CustomProduct')
    class Product {
      @Name('customSku')
      sku!: string;
    }

    const classDescriptor = MetadataDescriptor.for(Product);
    const propertyDescriptor = MetadataDescriptor.for(Product, 'sku');

    expect(classDescriptor.name).toEqual('CustomProduct');
    expect(propertyDescriptor.name).toEqual('customSku');
  });

});
