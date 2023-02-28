import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, finalize } from 'rxjs';
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
          map(result => RandomActions.loadRandomPhotoSuccess({ photo: result.response as unknown as Photo })),
          finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
        );
      })
    )
  );

  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
