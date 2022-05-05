import * as fromPhotos from './photos.actions';

describe('loadPhotos', () => {
  it('should return an action', () => {
    expect(fromPhotos.loadPhotos().type).toBe('[Photos] Load Photos');
  });
});
