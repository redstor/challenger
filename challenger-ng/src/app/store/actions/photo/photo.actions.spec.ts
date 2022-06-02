import { PhotoActions } from "..";

describe('loadPhoto', () => { 
  it('should return an action', () => {
    expect(PhotoActions.loadPhoto().type).toBe('[Photo] Load Photo');
  });
});

