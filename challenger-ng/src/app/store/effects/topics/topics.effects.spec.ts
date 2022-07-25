import { provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TopicsEffects } from './topics.effects';
import { UnsplashService } from '@app/shared/services';
import MockUnsplashService from '@app/shared/services/unsplash/unsplash.mock.service';
import { TopicsActions } from '@app/store/actions';
import { ActionsSubject } from '@ngrx/store';

describe('TopicsEffects', () => {
  let actions$ = new ActionsSubject();
  let effects: TopicsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TopicsEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: UnsplashService, useValue: MockUnsplashService }
      ]
    });

    effects = TestBed.inject(TopicsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
  it('actions$ loadTopics dispatches a success action', done => {
    effects.loadTopics$.subscribe(action => {
      expect(action).toEqual(TopicsActions.loadTopicsSuccess({ topics: [], total: 0 }));
      done();
    });
    actions$.next(TopicsActions.loadTopics({}));
  });
});
