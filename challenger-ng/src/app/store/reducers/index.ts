import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as fromAppContext from './app-context/app-context.reducer';
import * as fromCollections from './collection/collections.reducer';
import * as fromPhotos from './photos/photos.reducer';
import * as fromPhoto from './photo/photo.reducer';
import * as fromRandom from './random/random.reducer';
import * as fromSearch from './search/search.reducer';
import * as fromTopics from './topics/topics.reducer';
import * as fromStats from './stats/stats.reducer';
import * as fromTopicReducer from './topic/topic.reducer';

export interface State {
  appContext: fromAppContext.State;
  collections: fromCollections.State;
  photos: fromPhotos.State;
  photo: fromPhoto.State;
  random: fromRandom.State;
  search: fromSearch.State;
  topics: fromTopics.State;
  topicReducer: fromTopicReducer.State;
  stats: fromStats.State;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  appContext: fromAppContext.reducer,
  collections: fromCollections.reducer,
  photos: fromPhotos.reducer,
  photo: fromPhoto.reducer,
  random: fromRandom.reducer,
  search: fromSearch.reducer,
  topics: fromTopics.reducer,
  topicReducer: fromTopicReducer.reducer,
  stats: fromStats.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
