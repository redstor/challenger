import { AppContextActions } from '..';

describe('AppContext actions', () => {
  it('setLoading should return an action', () => {
    expect(AppContextActions.setLoading().type).toBe('[App-Context] Set Loading');
  });
  it('setLoaded should return an action', () => {
    expect(AppContextActions.setLoaded().type).toBe('[App-Context] Set Loaded');
  });
});
