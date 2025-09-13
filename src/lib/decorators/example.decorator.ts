/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Attaches an example value to the decorated class, property, method, or parameter.
 *
 * > This decorator sets the `<property>example` property on the associated
 * {@link MetadataDescriptor}.
 *
 * ## Usage
 *
 * ### Class
 * ```ts
 * @Example({ name: 'Wireless Mouse', price: 29.99 })
 * class Product {
 *   name: string;
 *   price: number;
 * }
 * ```
 *
 * ### Property
 * ```ts
 * class Product {
 *   @Example('Wireless Mouse')
 *   name: string;
 *
 *   @Example(29.99)
 *   price: number;
 * }
 * ```
 *
 * ### Method
 * ```ts
 * class ProductService {
 *   @Example([{ name: 'Wireless Mouse', price: 29.99 }])
 *   listProducts(): Product[] {
 *     return [];
 *   }
 * }
 * ```
 *
 * ### Parameter
 * ```ts
 * class ProductService {
 *   createProduct(
 *     @Example({ name: 'Wireless Mouse', price: 29.99 })
 *     product: Product
 *   ): void {
 *     // ...
 *   }
 * }
 * ```
 *
 * @decorator Class
 * @decorator Property
 * @decorator Method
 * @decorator Parameter
 * @decoratorKind Metadata
 * @decoratorPropertyType any
 */
export function Example(value: any): (target: object, name?: string, propertyDescriptor?: TypedPropertyDescriptor<any> | number) => void  {

  function Example(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) {
    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.example = value;
  }

  return Example
}
