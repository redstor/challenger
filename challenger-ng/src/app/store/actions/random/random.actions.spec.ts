import { loadRandomPhoto } from "./random.actions";


describe('loadRandomPhoto', () => {
  it('should return an action', () => {
    expect(loadRandomPhoto().type).toBe('[Random Photos] Load Random Photo');
  });
});