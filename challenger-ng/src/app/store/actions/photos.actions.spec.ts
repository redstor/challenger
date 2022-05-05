import * as fromPhotos from './photos.actions';

describe('loadPhotos', () => {
  it('should return an action', () => {
    expect(fromPhotos.loadPhotoss().type).toBe('[Photos] Load Photoss');
  });
});
