import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCollections from '../../reducers/collection/collections.reducer';

export const selectCollectionsFeature = createFeatureSelector<fromCollections.State>(fromCollections.collectionsFeatureKey);

export const selectCollections = createSelector(selectCollectionsFeature, (state: fromCollections.State) => state.collections);
