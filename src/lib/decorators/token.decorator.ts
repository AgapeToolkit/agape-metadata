/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Specifies a token for the decorated class, property, method, or parameter.
 *
 * Tokens can be used when referencing the object or attribute—for example, as
 * CSS classes or in URLs. While tokens can technically take any form, the
 * recommended format is lowercase kebab-case, as it is concise and widely
 * recognizable.
 *
 * > This decorator sets the `<property>token` and `<property>tokens` properties
 * on the associated {@link MetadataDescriptor}.
 *
 * @example
 * ### Class
 * ```ts
 * @Token('product', 'products')
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
 *   @Token('sku-code')
 *   skuCode: string;
 * }
 * ```
 *
 * @example
 * ### Method
 * ```ts
 * class ProductService {
 *   @Token('product')
 *   getProduct(id: string): void {
 *     // ...
 *   }
 * }
 * ```
 *
 * @example
 * ### Parameter
 * ```ts
 * class ProductService {
 *   create(@Token('product') product: Product): void {
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
export function Token(token: string | undefined, plural?: string): (target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) => void
export function Token(...args: any[]) {

  function Token(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) {

    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.token = args[0];

    if (args.length > 1) descriptor.tokenPlural = args[1];
  }

  return Token
}
