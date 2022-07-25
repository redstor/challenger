import { createAction, props } from '@ngrx/store';

export const setLoading = createAction('[App-Context] Set Loading');
export const setLoaded = createAction('[App-Context] Set Loaded');

export const setError = createAction('[App-Context] Set Error', props<{ error: string; from: string }>());
export const clearError = createAction('[App-Context] Clear Error');
