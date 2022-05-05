import { createReducer, on } from '@ngrx/store';
import { Photo } from '@app/models/photo.model';
import { loadPhotosSuccess } from '../actions/photos.actions';

export const photosFeatureKey = 'photos';

export interface State {
  collectionId: string | undefined;
  photos: ReadonlyArray<Photo>;
}

export const initialState: State = {
  collectionId: undefined,
  photos: []
};

export const reducer = createReducer(
  initialState,
  on(loadPhotosSuccess, (state, { collectionId, photos }) => ({
    ...state,
    collectionId: collectionId,
    photos: photos
  }))
);
