/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Marks the decorated class, property, method, or parameter as containing sensitive data.
 *
 * > This decorator sets `<property>sensitive` to `<intrinsic>true` on the corresponding
 * {@link MetadataDescriptor}
 *
 * @example
 * ### Class
 * ```ts
 * @Sensitive
 * class Credentials {
 *   username: string;
 *   password: string;
 * }
 * ```
 *
 * @example
 * ### Property
 * ```ts
 * class Employee {
 *   @Sensitive
 *   salary: number;
 * }
 * ```
 *
 * @example
 * ### Method
 * ```ts
 * class AuthService {
 *   @Sensitive
 *   authenticate(): Token {
 *     // authentication logic
 *   }
 * }
 * ```
 *
 * @example
 * ### Parameter
 * ```ts
 * class AuthService {
 *   login(
 *     @Sensitive credentials: Credentials
 *   ): Token {
 *     // login logic
 *   }
 * }
 * ```
 *
 * @example
 * ### Explicitly disable sensitivity
 * ```ts
 * class Admin extends User {
 *   @Sensitive(false)
 *   auditLog: string;
 * }
 * ```
 *
 * @param sensitive - Optional boolean to explicitly enable or disable sensitivity.
 *                    Defaults to `true` if omitted.
 *
 * @decorator Class
 * @decorator Property
 * @decorator Method
 * @decorator Parameter
 * @decoratorKind Metadata
 * @decoratorPropertyType any
 */
export function Sensitive(sensitive?: boolean): (target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) => void
export function Sensitive(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number): void
export function Sensitive(...args: any[]): ((target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) => void) | void {

  let sensitive = true;

  let target: object | Class | undefined;
  let name: string | undefined;
  let indexOrPropertyDescriptor: TypedPropertyDescriptor<any> | number | undefined;

  if (args.length === 0) sensitive = true;
  else if (args.length === 1 && typeof args[0] === 'boolean') sensitive = args[0];
  else [target, name, indexOrPropertyDescriptor] = args, sensitive = true;

  function Sensitive(target: object | Class, name?: string, index?: TypedPropertyDescriptor<any> | number) {

    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.sensitive = sensitive;
  }

  if (target) return Sensitive(target, name, indexOrPropertyDescriptor);
  else return Sensitive;
}
