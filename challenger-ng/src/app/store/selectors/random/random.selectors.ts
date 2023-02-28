import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRandom from '../../reducers/random/random.reducer';

export const selectRandomPhotoFeature = createFeatureSelector<fromRandom.State>(fromRandom.randomFeatureKey);

export const selectRandomPhoto = createSelector(selectRandomPhotoFeature, (state: fromRandom.State) => state.photo);
