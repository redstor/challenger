import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from '../../reducers/users/users.reducer';

export const selectUsersFeature = createFeatureSelector<fromUsers.State>(fromUsers.searchFeatureKey);

export const selectUsersResult = createSelector(selectUsersFeature, (state: fromUsers.State) => state.results);

export const selectUsersState = createSelector(selectUsersFeature, (state: fromUsers.State) => state);