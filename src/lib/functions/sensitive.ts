import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Retrieves the sensitive metadata associated with a class, property, or method parameter.
 *
 * This function is used to fetch the `<property>sensitive` value stored via metadata for the given target.
 * It supports metadata attached at the class level, property level, or parameter level depending
 * on which arguments are provided.
 *
 * @example
 * ### Class Level Sensitive
 *
 * ```ts
 * const metadata = sensitive(MyClass);
 * ```
 *
 * @example
 * ### Property Level Sensitive
 *
 * ```ts
 * const metadata = sensitive(MyClass, 'password');
 * ```
 *
 * @example
 * ### Parameter Level Sensitive
 *
 * ```ts
 * const metadata = sensitive(MyClass, 'setPassword', 0);
 * ```
 *
 * @param target - The target class constructor to retrieve metadata from.
 * @param property - The name of the property or method to retrieve metadata for.
 * @param index - The index of the parameter if retrieving metadata for a method parameter.
 * @returns The sensitive metadata if found; otherwise, `undefined`.
 */
export function sensitive(target: Class, property?: string, index?: number): boolean | undefined {
  return MetadataDescriptor.get(target, property, index)?.sensitive;
}
