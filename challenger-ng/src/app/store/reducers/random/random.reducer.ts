import { RandomActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const randomFeatureKey = 'random';

export interface State {
  photo: any;
}

export const initialState: State = {
  photo: {}
};

export const reducer = createReducer(
  initialState,
  on(RandomActions.loadRandomPhotoSuccess, (state, photo) => ({
    ...state,
    photo: photo
  })),
  on(RandomActions.restoreRandomPhoto, () => ({
    ...initialState
  }))
);
