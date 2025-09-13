/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Specifies a noun for the decorated class, property, method, or parameter.
 *
 * Nouns can be used when referencing the object or attribute.
 *
 * > This decorator sets the `<property>noun` and `<property>nouns` properties
 * on the associated {@link MetadataDescriptor}.
 *
 * ## Usage
 *
 * ### Class
 * ```ts
 * @Noun('product', 'products')
 * class Product {
 *   name: string;
 *   price: number;
 * }
 * ```
 *
 * ### Property
 * ```ts
 * class Product {
 *   @Noun('SKU')
 *   skuCode: string;
 * }
 * ```
 *
 * ### Method
 * ```ts
 * class ProductService {
 *   @Noun('product')
 *   getProduct(id: string): void {
 *     // ...
 *   }
 * }
 * ```
 *
 * ### Parameter
 * ```ts
 * class ProductService {
 *   create(@Noun('product') product: Product): void {
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
export function Noun(noun: string | undefined, plural?: string): (target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) => void
export function Noun(...args: any[]) {

  function Noun(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) {

    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.noun = args[0];

    if (args.length > 1) descriptor.nouns = args[1];
  }

  return Noun
}
