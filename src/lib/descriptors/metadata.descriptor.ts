import { Class } from '@agape/types';
import 'reflect-metadata';

/**
 *
 */
export class MetadataDescriptor {

  label?: string;

  labels?: string

  noun?: string;

  nouns?: string;

  token?: string;

  tokens?: string;

  sensitive?: boolean;

  description?: string;

  example?: unknown;

  static for(target: Class | object, property?: string, index?: number): MetadataDescriptor {
    const prototype = typeof target === 'function' ? target.prototype : target;
    const token = index !== undefined ? `${property}:${index}` : property || '';

    let descriptor = Reflect.getMetadata('agape:metadata', prototype, token);
    if (descriptor) return descriptor;

    descriptor = new MetadataDescriptor()
    Reflect.defineMetadata('agape:metadata', descriptor, prototype, token);

    return descriptor;
  }

  static get(target: Class | object, property?: string, index?: number): MetadataDescriptor | undefined {
    const prototype = typeof target === 'function' ? target.prototype : target;
    const token = index !== undefined ? `${property}:${index}` : property || '';
    return Reflect.getMetadata('agape:metadata', prototype, token);
  }
}
