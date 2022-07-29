import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStats from '../../reducers/stats/stats.reducer';

export const selectStatsFeature = createFeatureSelector<fromStats.State>(fromStats.statsFeatureKey);

export const selectStats = createSelector(selectStatsFeature, (state: fromStats.State) => state.stats);
