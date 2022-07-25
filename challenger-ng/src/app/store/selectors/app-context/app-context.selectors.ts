import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAppContext from '../../reducers/app-context/app-context.reducer';

export const selectAppContextFeature = createFeatureSelector<fromAppContext.State>(fromAppContext.appConextFeatureKey);

export const isLoading = createSelector(selectAppContextFeature, (state: fromAppContext.State) => state?.loading);

export const selectErrors = createSelector(selectAppContextFeature, (state: fromAppContext.State) => state?.error);
