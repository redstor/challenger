import { Topic, TopicOrderByEnum } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const loadTopics = createAction('[Topics] Load Topics', props<{ page?: number; perPage?: number; orderBy?: TopicOrderByEnum }>());

export const loadTopicsSuccess = createAction('[Topics] Load Topics Success', props<{ topics: Topic[]; total: number }>());

export const loadTopicsFailure = createAction('[Topics] Load Topics Failure', props<{ error: any}>());