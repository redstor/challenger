import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, of, withLatestFrom } from 'rxjs';

import { UnsplashService } from '@app/services/unsplash.service';
import { Photo } from '@app/models/photo.model';
import { selectRouteParam } from '../selectors/router.selectors';
import { loadPhoto, loadPhotoFailure, loadPhotoSuccess } from '../actions/photo.actions';

@Injectable()
export class PhotoEffects {
  loadPhoto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPhoto),
      withLatestFrom(this.store.select(selectRouteParam('photoId'))),
      exhaustMap(([_, id]) => {
        return !id
          ? of(loadPhotoFailure())
          : this.unsplash.getPhoto(id).pipe(
              map(result => {
                return result.type === 'success'
                  ? loadPhotoSuccess({ photo: result.response as unknown as Photo })
                  : loadPhotoFailure();
              })
            );
      })
    );
  });

  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
