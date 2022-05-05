import { createReducer, on } from '@ngrx/store';
import { Collection } from '@app/models/collection.model';
import { loadCollectionsSuccess } from '../actions/collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ReadonlyArray<Collection>;
}

export const initialState: State = {
  collections: []
};

export const reducer = createReducer(
  initialState,
  on(loadCollectionsSuccess, (state, { collections }) => ({ ...state, collections }))
);
