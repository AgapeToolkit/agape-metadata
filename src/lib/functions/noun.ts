import { Class } from '@agape/types';
import { MetadataDescriptor } from '../descriptors/metadata.descriptor';

export function noun(target: Class, property?: string, index?: number) {
  return MetadataDescriptor.for(target, property, index).noun;
}
