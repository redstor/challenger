import { createAction, props } from '@ngrx/store';
import { Photo } from '@app/models/photo.model';

export const loadPhotos = createAction('[Photos] Load Photos');

export const loadPhotosSuccess = createAction('[Photos] Load Photos Success', props<{ collectionId: string; photos: Photo[] }>());

export const loadPhotosFailure = createAction('[Photos] Load Photos Failure');
