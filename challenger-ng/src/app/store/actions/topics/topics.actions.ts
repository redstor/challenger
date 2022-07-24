import { Topics } from '@app/models/interfaces/topics.model';
import { createAction, props } from '@ngrx/store';

export const loadTopics = createAction('[Topics] Load Topics');

export const loadTopicsSuccess = createAction('[Topics] Load Topics Success', props<{ topics: Topics }>());

export const loadTopicsFailure = createAction('[Topics] Load Topics Failure');
