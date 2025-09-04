import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

/**
 * Marks the decorated class, property, method, or parameter as containing sensitive data.
 *
 * > This decorator sets `<property>sensitive` to `<intrinsic>true` on the corresponding
 * {@link MetadataDescriptor}
 *
 * ## Usage
 *
 * ### Class
 * ```ts
 * @Sensitive
 * class Credentials {
 *   username: string;
 *   password: string;
 * }
 * ```
 *
 * ### Property
 * ```ts
 * class Employee {
 *   @Sensitive
 *   salary: number;
 * }
 * ```
 *
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
export function Sensitive(sensitive?: boolean): (target: object | Class, name?: string, index?: TypedPropertyDescriptor<unknown> | number) => void
export function Sensitive(target: object | Class, name?: string, index?: TypedPropertyDescriptor<unknown> | number): void
export function Sensitive(...args: never[] ): ((target: object | Class, name?: string, index?: TypedPropertyDescriptor<unknown> | number) => void) | void {

  let sensitive = true;

  let target: object;
  let name: string;
  let indexOrPropertyDescriptor: TypedPropertyDescriptor<unknown> | number;

  if (args.length === 0) sensitive = true;
  else if (args.length === 1 && typeof args[0] === 'boolean') sensitive = args[0];
  else [target, name, indexOrPropertyDescriptor] = args, sensitive = true;

  function Sensitive(target: object | Class, name?: string, index?: TypedPropertyDescriptor<unknown> | number) {

    const descriptor = index !== undefined && typeof index === "number"
      ? MetadataDescriptor.for(target, name, index)
      : MetadataDescriptor.for(target, name);

    descriptor.sensitive = sensitive;
  }

  if (target) return Sensitive(target, name, indexOrPropertyDescriptor);
  else return Sensitive;
}
