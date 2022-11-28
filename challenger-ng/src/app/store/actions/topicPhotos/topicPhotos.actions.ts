import { createAction, props } from '@ngrx/store';
import { Photo } from '@app/models';

export const loadTopicPhotos = createAction('[TopicPhotos] Load Topic Photos Success');

export const loadTopicPhotosFailure = createAction('[TopicPhotos] Load Topic Photos Failure');

export const restoreTopicPhotos = createAction('[TopicPhotos] Restore Topic Photos');

export const loadTopicPhotosSuccess = createAction('[TopicPhotos] Load Topic Photos Success', props<{ topicIdOrSlug: string; topicPhotos: Photo[] }>());
