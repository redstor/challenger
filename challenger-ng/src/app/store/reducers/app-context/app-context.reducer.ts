import { AppContextActions } from '@app/store/actions';
import { createReducer, on } from '@ngrx/store';

export const appConextFeatureKey = 'appContext';

export interface State {
  loading: boolean;
  error: {
    message: string;
    from: string;
  } | null;
}

export const initialState: State = {
  loading: false,
  error: null
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
  })),
  on(AppContextActions.setError, (state, { error, from }) => ({
    ...state,
    error: {
      message: error,
      from
    }
  })),
  on(AppContextActions.clearError, state => ({
    ...state,
    error: null
  }))
);
