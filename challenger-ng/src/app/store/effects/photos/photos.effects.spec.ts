import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { PhotosEffects } from './photos.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import MockUnsplashService from '@app/shared/services/unsplash/unsplash.mock.service';

describe('PhotosEffects', () => {
  let actions$: Observable<any>;
  let effects: PhotosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhotosEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: UnsplashService, useValue: MockUnsplashService }
      ]
    });

    effects = TestBed.inject(PhotosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
