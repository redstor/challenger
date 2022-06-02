import { PhotoSearch } from '@app/models';
import { SearchActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'search';

export interface State {
  photosResult: ReadonlyArray<PhotoSearch>
}

export const initialState: State = {
  photosResult: []
};

export const reducer = createReducer(
  initialState,
  on(SearchActions.photoSearchCompleted, (state, { photosResult }) => ({ ...state, photosResult }))
);
