import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Retrieves the tokens metadata (plural form) associated with a class, property, or method parameter.
 *
 * This function is used to fetch the `<property>tokens` value stored via metadata for the given target.
 * It supports metadata attached at the class level, property level, or parameter level depending
 * on which arguments are provided.
 *
 * @example
 * ### Class Level Tokens
 *
 * ```ts
 * const metadata = tokens(MyClass);
 * ```
 *
 * @example
 * ### Property Level Tokens
 *
 * ```ts
 * const metadata = tokens(MyClass, 'title');
 * ```
 *
 * @example
 * ### Parameter Level Tokens
 *
 * ```ts
 * const metadata = tokens(MyClass, 'setTitle', 0);
 * ```
 *
 * @param target - The target class constructor to retrieve metadata from.
 * @param property - The name of the property or method to retrieve metadata for.
 * @param index - The index of the parameter if retrieving metadata for a method parameter.
 * @returns The tokens metadata if found; otherwise, `undefined`.
 */
export function tokens(target: Class, property?: string, index?: number): string | undefined {
  return MetadataDescriptor.get(target, property, index)?.tokens;
}
