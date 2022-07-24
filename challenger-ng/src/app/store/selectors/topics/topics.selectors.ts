import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTopics from '../../reducers/topics/topics.reducer';

export const selectTopicsFeature = createFeatureSelector<fromTopics.State>(fromTopics.topicsFeatureKey);

export const selectTopics = createSelector(selectTopicsFeature, (state: fromTopics.State) => state.topics);
