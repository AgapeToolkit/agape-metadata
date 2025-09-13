/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Specifies a name for the decorated class, property, method, or parameter.
 *
 * Names are used to identify the decorated element and can be used for
 * serialization, validation, and other metadata-driven operations.
 *
 * > This decorator sets the `name` property on the associated {@link MetadataDescriptor}.
 *
 * @example
 * ### Class
 * ```ts
 * @Name('Product')
 * class Product {
 *   name: string;
 *   price: number;
 * }
 * ```
 *
 * @example
 * ### Property
 * ```ts
 * class Product {
 *   @Name('skuCode')
 *   sku: string;
 * }
 * ```
 *
 * @example
 * ### Method
 * ```ts
 * class ProductService {
 *   @Name('createProduct')
 *   create(): void {
 *     // ...
 *   }
 * }
 * ```
 *
 * @example
 * ### Parameter
 * ```ts
 * class ProductService {
 *   create(@Name('product') product: Product): void {
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
 * @decoratorPropertyType string
 */
export function Name(name: string): (target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) => void
export function Name(...args: any[]) {

  function Name(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) {

    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.name = args[0];
  }

  return Name
}
