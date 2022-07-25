import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { map, finalize, exhaustMap } from 'rxjs';
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
          map(result => {
            const success = result.type === 'success';

            // toDo change to catch array of errors
            !success && this.store.dispatch(AppContextActions.setError({ error: result.errors[0], from: 'collections' }));

            return success
              ? CollectionActions.loadCollectionsSuccess({ collections: result.response.results, total: result.response.total })
              : CollectionActions.loadCollectionsFailure();
          }),
          finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
        );
      })
    )
  );

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
