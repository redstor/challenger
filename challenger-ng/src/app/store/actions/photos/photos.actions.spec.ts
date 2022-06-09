import { PhotosActions } from "..";


describe('loadPhotos', () => {
  it('should return an action', () => {
    expect(PhotosActions.loadPhotos().type).toBe('[Photos] Load Photos');
  });
});