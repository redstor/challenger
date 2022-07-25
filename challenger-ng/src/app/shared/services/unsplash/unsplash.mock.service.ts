let MockUnsplashService = jasmine.createSpyObj('UnsplashService', {
  listCollections: Promise.resolve(),
  listCollectionPhotos: Promise.resolve(),
  getPhoto: Promise.resolve(),
  listTopics: Promise.resolve(),
  listStats: Promise.resolve()
});

export default MockUnsplashService;
