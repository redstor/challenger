import { createReducer, on } from '@ngrx/store';
import { Topics } from '@app/models/interfaces/topics.model';
import { TopicsActions } from '@app/store/actions';

export const topicsFeatureKey = 'topics';

export interface State {
  topics: any;
}

export const initialState: State = {
  topics:  {}
};

export const reducer = createReducer(
  initialState,
  on(TopicsActions.loadTopicsSuccess, (state, { topics }) => ({ ...state, topics }))
);
