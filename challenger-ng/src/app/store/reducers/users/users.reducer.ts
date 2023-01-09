import { UsersSearch } from '@app/models/types/user-search';
import { UsersActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'users';

export interface State {
  results: ReadonlyArray<UsersSearch>,
  lastSearch : string
}

export const initialState: State = {
  results: [],
  lastSearch : '',
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.newSearch, (state, { searchKey }) => ({
    ...state,
    lastSearch: searchKey
  })),
  on(UsersActions.usersSearchCompleted, (state, { results }) => ({
    ...state,
    results
  }))
);
