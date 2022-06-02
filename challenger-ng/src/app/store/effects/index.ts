import { CollectionsEffects } from './collection/collections.effects';
import { PhotoEffects } from './photo/photo.effects';
import { PhotosEffects } from './photos/photos.effects';
import { SearchEffects } from './search/search.effects';

export const appEffects = [
  CollectionsEffects,
  PhotoEffects,
  PhotosEffects,
  SearchEffects
];