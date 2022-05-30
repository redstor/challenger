import { createReducer, on } from '@ngrx/store';
import { loadPhotoSuccess } from '../actions/photo.actions';

export const photoFeatureKey = 'photo';

export interface State {
  photo: any
}

export const initialState: State = {
  photo: {}
};

export const reducer = createReducer(
  initialState,
  on(loadPhotoSuccess, (state, photo) => ({
    ...state,
    photo: photo
  }))
);
