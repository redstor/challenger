import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { map, finalize, exhaustMap, catchError, of, tap } from 'rxjs';
import { CollectionActions, AppContextActions } from '@app/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class CollectionsEffects {
  loadCollections$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CollectionActions.loadCollections),
    exhaustMap(({ page, perPage }) => {
      this.store.dispatch(AppContextActions.setLoading());
      return this.unsplash.listCollections(page, perPage).pipe(
        map((result) => CollectionActions.loadCollectionsSuccess({ collections: result.response!.results, total: result.response!.total })),
        catchError((result) => of(CollectionActions.loadCollectionsFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);

loadCollectionsFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(CollectionActions.loadCollectionsFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'collections' }))
  })
),
{dispatch: false}
);

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
