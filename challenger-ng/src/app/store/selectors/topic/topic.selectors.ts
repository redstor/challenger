import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTopicReducer from '../../reducers/topic/topic.reducer';

export const selectTopicPhotosFeature = createFeatureSelector<fromTopicReducer.State>(fromTopicReducer.topicPhotosFeatureKey);
export const selectTopicId = createSelector(selectTopicPhotosFeature, (state: fromTopicReducer.State) => state.topicIdOrSlug);
export const selectTopicPhotos = createSelector(selectTopicPhotosFeature, (state: fromTopicReducer.State) => state.topicPhotos);