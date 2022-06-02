import { Collection } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const loadCollections = createAction('[Collections] Load Collections');

export const loadCollectionsSuccess = createAction('[Collections] Load Collections Success', props<{ collections: Collection[] }>());

export const loadCollectionsFailure = createAction('[Collections] Load Collections Failure');
