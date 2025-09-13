/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Retrieves the example metadata associated with a class, property, or method parameter.
 *
 * This function is used to fetch the `<property>example` value stored via metadata for the given target.
 * It supports metadata attached at the class level, property level, or parameter level depending
 * on which arguments are provided.
 *
 * ## Usage
 *
 * ### Class Level Example
 *
 * ```ts
 * const metadata = example(MyClass);
 * ```
 *
 * ### Property Level Example
 *
 * ```ts
 * const metadata = example(MyClass, 'title');
 * ```
 *
 * ### Parameter Level Example
 *
 * ```ts
 * const metadata = example(MyClass, 'setTitle', 0);
 * ```
 *
 * @param target - The target class constructor to retrieve metadata from.
 * @param property - The name of the property or method to retrieve metadata for.
 * @param index - The index of the parameter if retrieving metadata for a method parameter.
 * @returns The example metadata if found; otherwise, `undefined`.
 */
export function example(target: Class, property?: string, index?: number): any | undefined {
  return MetadataDescriptor.get(target, property, index)?.example;
}
