import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearch from '../../reducers/search/search.reducer';

export const selectSearchFeature = createFeatureSelector<fromSearch.State>(fromSearch.searchFeatureKey);

export const selectSearchResult = createSelector(selectSearchFeature, (state: fromSearch.State) => state.photosResult);

export const selectSearchState = createSelector(selectSearchFeature, (state: fromSearch.State) => state);