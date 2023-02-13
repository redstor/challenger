import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of, finalize, catchError, tap } from 'rxjs';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { Store } from '@ngrx/store';
import { AppContextActions, RandomActions } from '@app/store/actions';
import { Photo } from '@app/models';

@Injectable()
export class RandomEffects {
  loadPhoto$ = createEffect(() =>
  this.actions$.pipe(
    ofType(RandomActions.loadRandomPhoto),
    exhaustMap(() => {
      this.store.dispatch(AppContextActions.setLoading());
      this.store.dispatch(RandomActions.restoreRandomPhoto());
      return this.unsplash.getRandomPhoto().pipe(
        map((result) => RandomActions.loadRandomPhotoSuccess({ photo: result.response as unknown as Photo })),
        catchError((result) => of(RandomActions.loadRandomPhotoFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);

loadPhotoFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(RandomActions.loadRandomPhotoFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'random' }))
  })
),
{dispatch: false}
);

  
  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
