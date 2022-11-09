import { TopicOrderByEnum } from '@app/models';
import * as fromTopics from './topicPhotos.actions';

describe('Topics actions', () => {
  it('loadTopics should return an action', () => {
    expect(fromTopics.loadTopics({}).type).toBe('[Topics] Load Topics');
    const action = fromTopics.loadTopics({ page: 1, perPage: 1, orderBy: TopicOrderByEnum.latest });
    expect(action.type).toBe('[Topics] Load Topics');
    expect(action.page).toBe(1);
    expect(action.perPage).toBe(1);
    expect(action.orderBy).toBe(TopicOrderByEnum.latest);
  });
  it('loadTopicsSuccess should return an action', () => {
    const action = fromTopics.loadTopicsSuccess({ topics: [], total: 0 });
    expect(action.type).toBe('[Topics] Load Topics');
    expect(action.topics).toBe([]);
    expect(action.total).toBe(0);
  });
  it('loadTopicsFailure should return an action', () => {
    const action = fromTopics.loadTopicsFailure();
    expect(action.type).toBe('[Topics] Load Failure');
  });
});
