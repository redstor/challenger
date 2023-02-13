import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, of, withLatestFrom, finalize, tap, catchError } from 'rxjs';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { Photo } from '@app/models';
import { AppContextActions, PhotoActions } from '@app/store/actions';
import { RouterSelectors } from '@app/store/selectors';

@Injectable()
export class PhotoEffects {
  loadPhoto$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PhotoActions.loadPhoto),
    withLatestFrom(this.store.select(RouterSelectors.selectRouteParam('photoId'))),
    exhaustMap(([_, id]) => {
      this.store.dispatch(AppContextActions.setLoading());
      this.store.dispatch(PhotoActions.restorePhoto());
      return this.unsplash.getPhoto(id!).pipe(
        map((result) => PhotoActions.loadPhotoSuccess({ photo: result.response as unknown as Photo })),
        catchError((result) => of(PhotoActions.loadPhotoFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);

loadPhotoFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(PhotoActions.loadPhotoFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'photo' }))
  })
),
{dispatch: false}
);

  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
