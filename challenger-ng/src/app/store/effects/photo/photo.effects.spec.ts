import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { PhotoEffects } from './photo.effects';

describe('PhotosEffect', () => {
  let actions$: Observable<any>;
  let effects: PhotoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoEffects, provideMockStore(), provideMockActions(() => actions$)]
    });

    effects = TestBed.inject(PhotoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
