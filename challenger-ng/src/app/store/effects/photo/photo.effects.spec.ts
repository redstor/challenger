import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { PhotoEffects } from './photo.effects';
import { UnsplashService } from '@app/shared/services';
import MockUnsplashService from '@app/shared/services/unsplash/unsplash.mock.service';

describe('PhotosEffect', () => {
  let actions$: Observable<any>;
  let effects: PhotoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhotoEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: UnsplashService, useValue: MockUnsplashService }
      ]
    });

    effects = TestBed.inject(PhotoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
