import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as fromCollections from './collection/collections.reducer';
import * as fromPhotos from './photos/photos.reducer';
import * as fromPhoto from './photo/photo.reducer';

export interface State {
  collections: fromCollections.State;
  photos: fromPhotos.State;
  photo: fromPhoto.State;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.reducer,
  photos: fromPhotos.reducer,
  photo: fromPhoto.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
