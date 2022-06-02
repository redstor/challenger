import { Photo, PhotoSearch } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const newSearch = createAction(
  '[Search] Run new search',
  props<{ searchKey: string }>()
);

export const photoSearchCompleted = createAction(
  '[Search] Search completed', 
  props<{ total: number; photosResult: PhotoSearch[] }>()
);

export const loadPhotosFailure = createAction('[Search] Photo Search Failure');



