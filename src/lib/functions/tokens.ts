import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

export function tokens(target: Class, property?: string, index?: number) {
  return MetadataDescriptor.for(target, property, index).tokens;
}
