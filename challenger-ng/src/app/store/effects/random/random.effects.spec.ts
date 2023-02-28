import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { RandomEffects } from './random.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import MockUnsplashService from '@app/shared/services/unsplash/unsplash.mock.service';

describe('RandomEffects', () => {
  let actions$: Observable<any>;
  let effects: RandomEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RandomEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: UnsplashService, useValue: MockUnsplashService }
      ]
    });

    effects = TestBed.inject(RandomEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
