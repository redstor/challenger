import { provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TopicsEffects } from './topics.effects';
import { UnsplashService } from '@app/shared/services';
import MockUnsplashService from '@app/shared/services/unsplash/unsplash.mock.service';

describe('TopicsEffects', () => {
  let actions$: Observable<any>;
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
});
