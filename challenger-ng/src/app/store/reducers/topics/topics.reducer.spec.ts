import { TopicsActions } from '@app/store/actions';
import { initialState, reducer } from './topics.reducer';

describe('Topics Reducer', () => {
  it('unknown action should return the previous state', () => {
    const action = {} as any;
    const result = reducer(initialState, action);
    expect(result).toBe(initialState);
  });
  it('loadTopicsSuccess should change the state', () => {
    const result = reducer(initialState, TopicsActions.loadTopicsSuccess({ topics: [], total: 100 }));
    expect(result).toEqual({ topics: [], total: 100 });
  });
});
