import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPhoto from '../../reducers/photo/photo.reducer';

export const selectPhotoFeature = createFeatureSelector<fromPhoto.State>(fromPhoto.photoFeatureKey);

export const selectPhoto = createSelector(selectPhotoFeature, (state: fromPhoto.State) => state.photo);
