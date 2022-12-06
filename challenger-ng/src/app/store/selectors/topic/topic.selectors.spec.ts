import * as selectors from './topic.selectors';
import * as fromTopics from '../../reducers/topics/topics.reducer';

const newState: fromTopics.State = {
  topics: [{ id: 'test', title: 'test', cover_photo: null }],
  total: 100
};

describe('Topics Selectors', () => {
  it('should select the initial state topics 0', () => {
    const result = selectors.selectTopics.projector(fromTopics.initialState);
    expect(result).toEqual(fromTopics.initialState.topics);
  });
  it('should select the initial state total 0', () => {
    const result = selectors.selectTotal.projector(fromTopics.initialState);
    expect(result).toEqual(fromTopics.initialState.total);
  });
  it('should select the initial state topics 0', () => {
    const result = selectors.selectTopics.projector(newState);
    expect(result).toEqual(newState.topics);
  });
  it('should select the initial state total 0', () => {
    const result = selectors.selectTotal.projector(newState);
    expect(result).toEqual(newState.total);
  });
});
