import { Collection } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const loadCollections = createAction('[Collections] Load Collections', props<{ page?: number; perPage?: number }>());

export const loadCollectionsSuccess = createAction(
  '[Collections] Load Collections Success',
  props<{ collections: Collection[]; total: number }>()
);

export const loadCollectionsFailure = createAction('[Collections] Load Collections Failure');
