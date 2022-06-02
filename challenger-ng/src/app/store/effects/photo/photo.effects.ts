import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { Photo } from '@app/models';
import { PhotoActions } from '@app/store/actions';
import { RouterSelectors } from '@app/store/selectors';

@Injectable()
export class PhotoEffects {
  loadPhoto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PhotoActions.loadPhoto),
      withLatestFrom(this.store.select(RouterSelectors.selectRouteParam('photoId'))),
      exhaustMap(([_, id]) => {
        return !id
          ? of(PhotoActions.loadPhotoFailure())
          : this.unsplash.getPhoto(id).pipe(
              map(result => {
                return result.type === 'success'
                  ? PhotoActions.loadPhotoSuccess({ photo: result.response as unknown as Photo })
                  : PhotoActions.loadPhotoFailure();
              })
            );
      })
    );
  });

  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
