import * as fromPhoto from './photo.actions';

describe('loadPhoto', () => {
  it('should return an action', () => {
    expect(fromPhoto.loadPhoto().type).toBe('[Photos] Load Photo');
  });
});
