/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import 'reflect-metadata';

/**
 * A descriptor that holds metadata information for classes, properties, methods, and parameters.
 *
 * The `MetadataDescriptor` class is used to store and retrieve metadata associated with various
 * elements in your codebase. It supports storing information like names, labelPlural, descriptions,
 * and other metadata that can be used for serialization, validation, documentation generation,
 * and other metadata-driven operations.
 *
 * @example
 * ### Creating a Descriptor
 *
 * ```ts
 * // create a get descriptor for a class
 * const descriptor = MetaDataDescriptor.for(MyClass);
 *
 * // create or get a descriptor for a property or method
 * const descriptor = MetaDataDescriptor.for(MyClass, 'myProperty');
 *
 * // create or get adescriptor for a method parameter
 * const descriptor = MetaDataDescriptor.for(MyClass, 'myMethod', 0);
 * ```
 * @example
 * ### Retrieving and Existing Descriptor
 *
 * ```ts
 * // get descriptor for a class
 * const descriptor = MetaDataDescriptor.get(MyClass);
 *
 * // get descriptor for a property or method
 * const descriptor = MetaDataDescriptor.get(MyClass, 'myProperty');
 *
 * // get descriptor for a method parameter
 * const descriptor = MetaDataDescriptor.get(MyClass, 'myMethod', 0);
 * ```
 *
 * @example
 * ### Example
 *
 * ```ts
 * class User {
 *   @Label('Email address')
 *   @Description('The user\'s email address')
 *   @Sensitive()
 *   email: string;
 *
 *   @Label('Full name')
 *   fullName: string;
 * }
 *
 * // Get metadata for the class
 * const classDescriptor = MetadataDescriptor.for(User);
 * console.log(classDescriptor.name); // 'User'
 *
 * // Get metadata for the email property
 * const emailDescriptor = MetadataDescriptor.for(User, 'email');
 * console.log(emailDescriptor.label); // 'Email Address'
 * console.log(emailDescriptor.sensitive); // true
 * ```
 */
export class MetadataDescriptor {

  /**
   * The name of the decorated element.
   *
   * For classes, this is typically the class name.
   * For properties, this is typically the property name.
   * For parameters, this is usually undefined unless explicitly set.
   */
  name?: string;

  /**
   * A human-readable label for the decorated element.
   *
   * Labels are typically used in user interfaces such as form inputs,
   * tables, and auto-generated documentation.
   */
  label?: string;

  /**
   * The plural form of the label.
   *
   * Used when displaying multiple instances of the decorated element,
   * such as in table headers or list titles.
   */
  labelPlural?: string;

  /**
   * A noun that represents the decorated element.
   *
   * Nouns are used for grammatical purposes and can help with
   * generating proper text in documentation or user interfaces.
   */
  noun?: string;

  /**
   * The plural form of the noun.
   *
   * Used when referring to multiple instances of the decorated element.
   */
  nounPlural?: string;

  /**
   * A token identifier for the decorated element.
   *
   * Tokens are typically used for internal identification and
   * can be used for serialization or other programmatic operations.
   */
  token?: string;

  /**
   * The plural form of the token.
   *
   * Used when referring to multiple instances of the decorated element.
   */
  tokenPlural?: string;

  /**
   * Indicates whether the decorated element contains sensitive information.
   *
   * When true, this element should be treated with special care in terms
   * of logging, serialization, and display to ensure sensitive data
   * is not inadvertently exposed.
   */
  sensitive?: boolean;

  /**
   * A detailed description of the decorated element.
   *
   * Descriptions provide additional context and information about
   * the purpose and usage of the decorated element.
   */
  description?: string;

  /**
   * An example value for the decorated element.
   *
   * Examples can be used in documentation, validation messages,
   * or as default values in user interfaces.
   */
  example?: any;

  /**
   * Creates a new MetadataDescriptor instance.
   *
   * @param name - Optional name for the decorated element. If not provided,
   *               the name can be set later or will be automatically determined
   *               when using the `for()` method.
   */
  constructor(name?: string) {
    this.name = name;
  }

  /**
   * Gets or creates a MetadataDescriptor for the specified target.
   *
   * This method retrieves an existing metadata descriptor or creates a new one
   * if none exists. The name property is automatically set based on the context:
   * - For classes: uses the class name
   * - For properties: uses the property name
   * - For parameters: no name is set (undefined)
   *
   * @param target - The target class constructor or object to get metadata for.
   * @param property - Optional property name when getting metadata for a property or method.
   * @param index - Optional parameter index when getting metadata for a method parameter.
   * @returns The MetadataDescriptor for the specified target. If no descriptor exists,
   *          a new one is created and returned.
   *
   * @example
   * ```ts
   * class Product {
   *   name: string;
   *   price: number;
   *
   *   calculateTotal(tax: number): number {
   *     return this.price * (1 + tax);
   *   }
   * }
   *
   * // Get descriptor for the class
   * const classDescriptor = MetadataDescriptor.for(Product);
   * console.log(classDescriptor.name); // 'Product'
   *
   * // Get descriptor for a property
   * const nameDescriptor = MetadataDescriptor.for(Product, 'name');
   * console.log(nameDescriptor.name); // 'name'
   *
   * // Get descriptor for a method parameter
   * const paramDescriptor = MetadataDescriptor.for(Product, 'calculateTotal', 0);
   * console.log(paramDescriptor.name); // undefined
   * ```
   */
  static for(target: Class | object, property?: string, index?: number): MetadataDescriptor {
    const prototype = typeof target === 'function' ? target.prototype : target;
    const token = index !== undefined ? `${property}:${index}` : property || '';

    let descriptor = Reflect.getMetadata('agape:metadata', prototype, token);
    if (descriptor) return descriptor;

    let name: string | undefined;

    if (index !== undefined) {
      name = undefined;
    } else if (property) {
      name = property;
    } else if (typeof target === 'function') {
      name = target.name;
    }

    descriptor = new MetadataDescriptor(name);
    Reflect.defineMetadata('agape:metadata', descriptor, prototype, token);

    return descriptor;
  }

  /**
   * Retrieves an existing MetadataDescriptor for the specified target.
   *
   * This method only retrieves existing metadata descriptors and does not
   * create new ones. If no descriptor exists, it returns undefined.
   *
   * @param target - The target class constructor or object to get metadata for.
   * @param property - Optional property name when getting metadata for a property or method.
   * @param index - Optional parameter index when getting metadata for a method parameter.
   * @returns The existing MetadataDescriptor if found, otherwise undefined.
   *
   * @example
   * ```ts
   * class Product {
   *   @Label('Product Name')
   *   name: string;
   * }
   *
   * // Get existing descriptor for the class
   * const classDescriptor = MetadataDescriptor.get(Product);
   * console.log(classDescriptor?.name); // 'Product' (if descriptor exists)
   *
   * // Get existing descriptor for a property
   * const nameDescriptor = MetadataDescriptor.get(Product, 'name');
   * console.log(nameDescriptor?.label); // 'Product Name' (if descriptor exists)
   *
   * // Try to get non-existent descriptor
   * const nonExistent = MetadataDescriptor.get(Product, 'nonExistent');
   * console.log(nonExistent); // undefined
   * ```
   */
  static get(target: Class | object, property?: string, index?: number): MetadataDescriptor | undefined {
    const prototype = typeof target === 'function' ? target.prototype : target;
    const token = index !== undefined ? `${property}:${index}` : property || '';
    return Reflect.getMetadata('agape:metadata', prototype, token);
  }
}
