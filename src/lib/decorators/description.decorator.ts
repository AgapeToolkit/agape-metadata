/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Attaches a human-readable description to the class, property, method, or parameter.
 *
 * > This decorator sets the `<property>description` property on the associated
 * {@link MetadataDescriptor}.
 *
 * @example
 * ### Class
 * ```ts
 * @Description('Represents a user profile with personal and contact information')
 * class Profile {
 *   fullName: string;
 *   email: string;
 * }
 * ```
 *
 * @example
 * ### Property
 * ```ts
 * class Profile {
 *   @Description('The full name of the user as displayed on their profile')
 *   fullName: string;
 * }
 * ```
 *
 * @example
 * ### Method
 * ```ts
 * class ProfileService {
 *   @Description('Updates the user profile with the provided information')
 *   updateProfile(profile: Profile): void {
 *     // ...
 *   }
 * }
 * ```
 *
 * @example
 * ### Parameter
 * ```ts
 * class ProfileService {
 *   updateProfile(
 *     @Description('The updated profile data to be saved')
 *     profile: Profile
 *   ): void {
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
export function Description(description: string) {

  function Description(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) {

    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.description = description;
  }

  return Description
}
