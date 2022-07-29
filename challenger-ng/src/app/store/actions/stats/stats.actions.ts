import { Stats } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const loadStats = createAction('[Stats] Load Stats');
export const loadStatsSuccess = createAction('[Stats] Load Stats Success', props<{ stats: Stats }>());
export const loadStatsFailure = createAction('[Stats] Load Stats Failure');
