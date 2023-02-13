import { createAction, props } from '@ngrx/store';
import { Photo } from '@app/models';

export const loadPhotos = createAction('[Photos] Load Photos');

export const restorePhotos = createAction('[Photos] Restore Photos');

export const loadPhotosSuccess = createAction('[Photos] Load Photos Success', props<{ collectionId: string; photos: Photo[] }>());

export const loadPhotosFailure = createAction('[Photos] Load Photos Failure', props<{ error: any}>());
