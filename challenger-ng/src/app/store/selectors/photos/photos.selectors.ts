import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPhotos from '../../reducers/photos/photos.reducer';

export const selectPhotosFeature = createFeatureSelector<fromPhotos.State>(fromPhotos.photosFeatureKey);
export const selectCollectionId = createSelector(selectPhotosFeature, (state: fromPhotos.State) => state.collectionId);
export const selectPhotos = createSelector(selectPhotosFeature, (state: fromPhotos.State) => state.photos);
