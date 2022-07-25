import { createReducer, on } from '@ngrx/store';
import { Collection } from '@app/models';
import { CollectionActions } from '@app/store/actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ReadonlyArray<Collection>;
}

export const initialState: State = {
  collections: []
};

export const reducer = createReducer(
  initialState,
  on(CollectionActions.loadCollectionsSuccess, (state, { collections }) => ({ ...state, collections }))
);
