/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class } from '@agape/types';
import 'reflect-metadata';

/**
 *
 */
export class MetadataDescriptor {

  name?: string;

  label?: string;

  labels?: string

  noun?: string;

  nouns?: string;

  token?: string;

  tokens?: string;

  sensitive?: boolean;

  description?: string;

  example?: any;

  constructor(name?: string) {
    this.name = name;
  }

  static for(target: Class | object, property?: string, index?: number): MetadataDescriptor {
    const prototype = typeof target === 'function' ? target.prototype : target;
    const token = index !== undefined ? `${property}:${index}` : property || '';

    let descriptor = Reflect.getMetadata('agape:metadata', prototype, token);
    if (descriptor) return descriptor;

    // Determine the name based on the context
    let name: string | undefined;
    if (index !== undefined) {
      // For parameters, no name is set
      name = undefined;
    } else if (property) {
      // For properties, use the property name
      name = property;
    } else if (typeof target === 'function') {
      // For classes, use the class name
      name = target.name;
    }

    descriptor = new MetadataDescriptor(name);
    Reflect.defineMetadata('agape:metadata', descriptor, prototype, token);

    return descriptor;
  }

  static get(target: Class | object, property?: string, index?: number): MetadataDescriptor | undefined {
    const prototype = typeof target === 'function' ? target.prototype : target;
    const token = index !== undefined ? `${property}:${index}` : property || '';
    return Reflect.getMetadata('agape:metadata', prototype, token);
  }
}
