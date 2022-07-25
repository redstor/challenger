import { createReducer, on } from '@ngrx/store';
import { Topic } from '@app/models';
import { TopicsActions } from '@app/store/actions';

export const topicsFeatureKey = 'topics';

export interface State {
  topics: ReadonlyArray<Topic>;
  total: number;
}

export const initialState: State = {
  topics: [],
  total: 0
};

export const reducer = createReducer(
  initialState,
  on(TopicsActions.loadTopicsSuccess, (state, { topics, total }) => ({ ...state, topics, total }))
);
