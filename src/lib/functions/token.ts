import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Retrieves the token metadata associated with a class, property, or method parameter.
 *
 * This function is used to fetch the `<property>token` value stored via metadata for the given target.
 * It supports metadata attached at the class level, property level, or parameter level depending
 * on which arguments are provided.
 *
 * @example
 * ### Class Level Token
 *
 * ```ts
 * const metadata = token(MyClass);
 * ```
 *
 * @example
 * ### Property Level Token
 *
 * ```ts
 * const metadata = token(MyClass, 'title');
 * ```
 *
 * @example
 * ### Parameter Level Token
 *
 * ```ts
 * const metadata = token(MyClass, 'setTitle', 0);
 * ```
 *
 * @param target - The target class constructor to retrieve metadata from.
 * @param property - The name of the property or method to retrieve metadata for.
 * @param index - The index of the parameter if retrieving metadata for a method parameter.
 * @returns The token metadata if found; otherwise, `undefined`.
 */
export function token(target: Class, property?: string, index?: number): string | undefined {
  return MetadataDescriptor.get(target, property, index)?.token;
}
