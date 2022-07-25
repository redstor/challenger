import * as fromTopics from './topics.actions';

describe('loadTopics', () => {
  it('should return an action', () => {
    expect(fromTopics.loadTopics({}).type).toBe('[Topics] Load Topics');
  });
});
