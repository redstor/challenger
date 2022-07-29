import { PhotoActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const photoFeatureKey = 'photo';

export interface State {
  photo: any;
}

export const initialState: State = {
  photo: {}
};

export const reducer = createReducer(
  initialState,
  on(PhotoActions.loadPhotoSuccess, (state, photo) => ({
    ...state,
    photo: photo
  })),
  on(PhotoActions.restorePhoto, () => ({
    ...initialState
  }))
);
