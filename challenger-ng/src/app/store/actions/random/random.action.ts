import { createAction, props } from '@ngrx/store';
import { Photo } from '@app/models';

export const loadRandomPhoto = createAction('[Random Photo] Load RandomPhoto');

export const restoreRandomPhoto = createAction('[Random Photo] Restore Random Photo');

export const loadRandomPhotoSuccess = createAction('[Random Photo] Load Random Photo Success', props<{ photo: Photo }>());