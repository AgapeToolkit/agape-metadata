import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Retrieves the label metadata (plural form) associated with a class, property, or method parameter.
 *
 * This function is used to fetch the `<property>labels` value stored via metadata for the given target.
 * It supports metadata attached at the class level, property level, or parameter level depending
 * on which arguments are provided.
 *
 * ## Usage
 *
 * ### Class Level Labels
 *
 * ```ts
 * const labels = labels(MyClass);
 * ```
 *
 * ### Property Level Labels
 *
 * ```ts
 * const labels = labels(MyClass, 'title');
 * ```
 *
 * ### Parameter Level Labels
 *
 * ```ts
 * const labels = labels(MyClass, 'setTitle', 0);
 * ```
 *
 * @param target - The target class constructor to retrieve metadata from.
 * @param property - The name of the property or method to retrieve metadata for.
 * @param index - The index of the parameter if retrieving metadata for a method parameter.
 * @returns The labels metadata if found; otherwise, `undefined`.
 */
export function labels(target: Class, property?: string, index?: number): string | undefined {
  return MetadataDescriptor.get(target, property, index)?.labels;
}
