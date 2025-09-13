import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Retrieves the label metadata associated with a class, property, or method parameter.
 *
 * This function is used to fetch the `label` value stored via metadata for the given target.
 * It supports metadata attached at the class level, property level, or parameter level depending
 * on which arguments are provided.
 *
 * ## Usage
 *
 * ### Class Level Label
 *
 * ```ts
 * const label = label(MyClass);
 * ```
 *
 * ### Property Level Label
 *
 * ```ts
 * const label = label(MyClass, 'title');
 * ```
 *
 * ### Parameter Level Label
 *
 * ```ts
 * const label = label(MyClass, 'setTitle', 0);
 * ```
 *
 * @param target - The target class constructor to retrieve metadata from.
 * @param property - The name of the property or method to retrieve metadata for.
 * @param index - The index of the parameter if retrieving metadata for a method parameter.
 * @returns The label metadata if found; otherwise, `undefined`.
 */
export function label(target: Class, property?: string, index?: number): string | undefined {
  return MetadataDescriptor.get(target, property, index)?.label;
}
