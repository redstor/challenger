import { createReducer, on } from '@ngrx/store';
import { Stats } from '@app/models';
import { StatsActions } from '@app/store/actions';

export const statsFeatureKey = 'stats';

export interface State {
  stats: Stats;
}

export const initialState: State = {
  stats: {
    photos: 0,
    downloads: 0,
    views: 0,
    likes: 0,
    photographers: 0,
    pixels: 0,
    downloads_per_second: 0,
    views_per_second: 0,
    developers: 0,
    applications: 0,
    requests: 0
  }
};

export const reducer = createReducer(
  initialState,
  on(StatsActions.loadStatsSuccess, (state, { stats }) => ({ ...state, stats }))
);
