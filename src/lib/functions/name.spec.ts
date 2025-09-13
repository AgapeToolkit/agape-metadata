import { name } from './name';
import { Name } from '../decorators/name.decorator';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

describe('name', () => {

  it('should get name from class', () => {
    @Name('Product')
    class Product {
      name!: string;
    }

    const result = name(Product);
    expect(result).toEqual('Product');
  });

  it('should get name from property', () => {
    class Product {
      @Name('skuCode')
      sku!: string;
    }

    const result = name(Product, 'sku');
    expect(result).toEqual('skuCode');
  });

  it('should get name from method', () => {
    class ProductService {
      @Name('createProduct')
      create(): void {
        // ...
      }
    }

    const result = name(ProductService, 'create');
    expect(result).toEqual('createProduct');
  });

  it('should get name from parameter', () => {
    class ProductService {
      create(@Name('product') product: any): void {
        // ...
      }
    }

    const result = name(ProductService, 'create', 0);
    expect(result).toEqual('product');
  });

  it('should return undefined when no name is set', () => {
    class Product {
      sku!: string;
    }

    const classResult = name(Product);
    const propertyResult = name(Product, 'sku');

    expect(classResult).toBeUndefined();
    expect(propertyResult).toBeUndefined();
  });

  it('should return automatically set name when no decorator is used', () => {
    class Product {
      sku!: string;
    }

    // Get descriptors to trigger automatic name setting
    MetadataDescriptor.for(Product);
    MetadataDescriptor.for(Product, 'sku');

    const classResult = name(Product);
    const propertyResult = name(Product, 'sku');

    expect(classResult).toEqual('Product');
    expect(propertyResult).toEqual('sku');
  });

});
