import * as fromStats from './stats.actions';

describe('loadStats', () => {
  it('should return an action', () => {
    expect(fromStats.loadStats().type).toBe('[Stats] Load Stats');
  });
});
