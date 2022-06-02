import { SearchActions } from "..";

describe('loadSearchs', () => {
  it('should return an action', () => {
    expect(SearchActions.newSearch({ searchKey: 'test' }).type).toBe('[Search] Run new search');
  });
});
