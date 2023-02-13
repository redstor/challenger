import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of, withLatestFrom, finalize, delay, catchError, tap } from 'rxjs';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { Store } from '@ngrx/store';
import { AppContextActions, PhotosActions } from '@app/store/actions';
import { RouterSelectors } from '@app/store/selectors';

@Injectable()
export class PhotosEffects {
  loadPhotos$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PhotosActions.loadPhotos),
    withLatestFrom(this.store.select(RouterSelectors.selectRouteParam('collectionId'))),
    exhaustMap(([_, id]) => {
      this.store.dispatch(AppContextActions.setLoading());
      this.store.dispatch(PhotosActions.restorePhotos());
      return this.unsplash.listCollectionPhotos(id!).pipe(
        map((result) => PhotosActions.loadPhotosSuccess({ collectionId: id!, photos: result.response!.results})),
        catchError((result) => of(PhotosActions.loadPhotosFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);

loadPhotoFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(PhotosActions.loadPhotosFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'photos' }))
  })
),
{dispatch: false}
);

  
  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
