import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as fromCollections from './collections.reducer';
import * as fromPhotos from './photos.reducer';

export interface State {
  collections: fromCollections.State;
  photos: fromPhotos.State;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.reducer,
  photos: fromPhotos.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
