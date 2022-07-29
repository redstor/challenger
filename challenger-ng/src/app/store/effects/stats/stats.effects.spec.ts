import { TestBed } from '@angular/core/testing';
import { UnsplashService } from '@app/shared/services';
import MockUnsplashService from '@app/shared/services/unsplash/unsplash.mock.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { StatsEffects } from './stats.effects';

describe('StatsEffects', () => {
  let actions$: Observable<any>;
  let effects: StatsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StatsEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: UnsplashService, useValue: MockUnsplashService }
      ]
    });

    effects = TestBed.inject(StatsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
