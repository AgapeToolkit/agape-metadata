import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Specifies a label for the decorated class, property, method, or parameter.
 *
 * Labels can be used when displaying in user interfaces such as form inputs,
 * tables, and auto-generated documentation.
 *
 * > This decorator sets the `<property>label` and `<property>labels` properties
 * on the associated {@link MetadataDescriptor}.
 *
 * ## Usage
 *
 * ### Class
 * ```ts
 * @Label('Product', 'Products')
 * class Product {
 *   name: string;
 *   price: number;
 * }
 * ```
 *
 * ### Property
 * ```ts
 * class Product {
 *   @Label('SKU')
 *   skuCode: string;
 * }
 * ```
 *
 * ### Method
 * ```ts
 * class ProductService {
 *   @Label('Create Product')
 *   create(): void {
 *     // ...
 *   }
 * }
 * ```
 *
 * ### Parameter
 * ```ts
 * class ProductService {
 *   create(@Label('Product') product: Product): void {
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
export function Label(label: string | undefined, plural?: string): (target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) => void
export function Label(...args: any[]) {

  function Label(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) {

    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.label = args[0];

    if (args.length > 1) descriptor.labels = args[1];
  }

  return Label
}
