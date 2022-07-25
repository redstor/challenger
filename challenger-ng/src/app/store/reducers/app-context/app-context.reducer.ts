import { AppContextActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const appConextFeatureKey = 'appContext';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(AppContextActions.setLoading, state => ({
    ...state,
    loading: true
  })),
  on(AppContextActions.setLoaded, state => ({
    ...state,
    loading: false
  }))
);
