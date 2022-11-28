import { Photo } from '@app/models';
import { TopicPhotosActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const topicPhotosFeatureKey = 'topicReducer';

export interface State {
  topicIdOrSlug: string | undefined;
  topicPhotos: ReadonlyArray<Photo>;
}

export const initialState: State = {
  topicIdOrSlug: undefined,
  topicPhotos: []
};

export const reducer = createReducer(
  initialState,
  on(TopicPhotosActions.loadTopicPhotosSuccess, (state, { topicIdOrSlug, topicPhotos }) => ({
    ...state,
    topicIdOrSlug: topicIdOrSlug,
    topicPhotos: topicPhotos
  })),
  on(TopicPhotosActions.restoreTopicPhotos, () => ({
    ...initialState
  }))
);
