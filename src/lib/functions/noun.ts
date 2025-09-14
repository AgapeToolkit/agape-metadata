import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Retrieves the noun metadata associated with a class, property, or method parameter.
 *
 * This function is used to fetch the `<property>noun` value stored via metadata for the given target.
 * It supports metadata attached at the class level, property level, or parameter level depending
 * on which arguments are provided.
 *
 * @example
 * ### Class Level Noun
 *
 * ```ts
 * const metadata = noun(MyClass);
 * ```
 *
 * @example
 * ### Property Level Noun
 *
 * ```ts
 * const metadata = noun(MyClass, 'title');
 * ```
 *
 * @example
 * ### Parameter Level Noun
 *
 * ```ts
 * const metadata = noun(MyClass, 'setTitle', 0);
 * ```
 *
 * @param target - The target class constructor to retrieve metadata from.
 * @param property - The name of the property or method to retrieve metadata for.
 * @param index - The index of the parameter if retrieving metadata for a method parameter.
 * @returns The noun metadata if found; otherwise, `undefined`.
 */
export function noun(target: Class, property?: string, index?: number): string | undefined {
  return MetadataDescriptor.get(target, property, index)?.noun;
}
