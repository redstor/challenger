import { UsersSearch } from '@app/models/types/user-search';
import { createAction, props } from '@ngrx/store';

export const newSearch = createAction(
  '[Users] Run new search',
  props<{ searchKey: string }>()
);

export const usersSearchCompleted = createAction(
  '[Users] Search completed',
  props<{ results : UsersSearch[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Users Search Failure'
);



