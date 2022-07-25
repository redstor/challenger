import { Observable } from 'rxjs';

const defaultMock = {
  listCollections: Promise.resolve(),
  listCollectionPhotos: Promise.resolve(),
  getPhoto: Promise.resolve(),
  listTopics: new Observable(o => o.next({ type: 'success', response: { results: [], total: 0 } })),
  listStats: Promise.resolve()
};

export default jasmine.createSpyObj('UnsplashService', defaultMock);
