import * as fromCollections from './collections.actions';

describe('loadCollections', () => {
  it('should return an action', () => {
    expect(fromCollections.loadCollections({}).type).toBe('[Collections] Load Collections');
  });
});
