import { UsersActions } from "..";

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(UsersActions.newSearch({ searchKey: 'test' }).type).toBe('[Search] Run new search');
  });
});
