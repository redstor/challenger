import { Photo } from '@app/models';
import { PhotosActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

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
  on(PhotosActions.loadPhotosSuccess, (state, { collectionId, photos }) => ({
    ...state,
    collectionId: collectionId,
    photos: photos
  }))
);
