import { createAction, props } from '@ngrx/store';
import { Photo } from '@app/models';

export const loadPhoto = createAction('[Photo] Load Photo');

export const restorePhoto = createAction('[Photo] Restore Photo');

export const loadPhotoSuccess = createAction('[Photo] Load Photo Success', props<{ photo: Photo }>());

export const loadPhotoFailure = createAction('[Photo] Load Photo Failure');
