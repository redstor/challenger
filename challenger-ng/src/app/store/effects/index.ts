import { CollectionsEffects } from './collection/collections.effects';
import { PhotoEffects } from './photo/photo.effects';
import { PhotosEffects } from './photos/photos.effects';

export const appEffects = [
  CollectionsEffects,
  PhotoEffects,
  PhotosEffects
];