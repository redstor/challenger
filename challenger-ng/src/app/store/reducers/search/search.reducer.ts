import { PhotoSearch } from '@app/models';
import { SearchActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'search';

export interface State {
  photosResult: ReadonlyArray<PhotoSearch>,
  lastSearch: string,
  totalPages: number,
  currentPage: number
}

export const initialState: State = {
  photosResult: [],
  totalPages: 0,
  lastSearch: '',
  currentPage: 0
};

export const reducer = createReducer(
  initialState,
  on(SearchActions.newSearch, (state, { searchKey }) => ({
    ...state,
    lastSearch: searchKey
  })),
  on(SearchActions.photoSearchCompleted, (state, { photosResult, totalPages }) => ({
    ...state,
    photosResult,
    totalPages,
    currentPage: 1
  })),
  on(SearchActions.addPhotos, (state, { photosResult }) => ({
    ...state,
    photosResult: [...state.photosResult, ...photosResult],
    currentPage: state.currentPage + 1
  }))
);
