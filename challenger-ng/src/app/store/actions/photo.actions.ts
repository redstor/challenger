import { createAction, props } from '@ngrx/store';

import { Photo } from '@app/models/photo.model';

export const loadPhoto = createAction(
  '[Photo] Load Photo'
);

export const loadPhotoSuccess = createAction(
  '[Photo] Load Photo Success',
  props<{ photo: Photo }>()
);

export const loadPhotoFailure = createAction(
  '[Photo] Load Photo Failure'
);
