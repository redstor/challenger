import { TestBed } from '@angular/core/testing';
import { UnsplashService } from '@app/shared/services';
import MockUnsplashService from '@app/shared/services/unsplash/unsplash.mock.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { CollectionsEffects } from './collections.effects';

describe('CollectionsEffects', () => {
  let actions$: Observable<any>;
  let effects: CollectionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CollectionsEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: UnsplashService, useValue: MockUnsplashService }
      ]
    });

    effects = TestBed.inject(CollectionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
