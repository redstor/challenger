import { PhotoSearch } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const newSearch = createAction(
  '[Search] Run new search',
  props<{ searchKey: string }>()
);

export const photoSearchCompleted = createAction(
  '[Search] Search completed',
  props<{ totalPages: number; photosResult: PhotoSearch[] }>()
);

export const loadPhotosFailure = createAction(
  '[Search] Photo Search Failure', props<{ error: any}>()
);

export const loadMoreSearchItems = createAction(
  '[Search] Load more search data'
);

export const addPhotos = createAction(
  '[Search] Add more photos to state',
  props<{ photosResult: PhotoSearch[] }>()
);


