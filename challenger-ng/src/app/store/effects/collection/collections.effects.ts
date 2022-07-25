import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { map, finalize, exhaustMap, catchError } from 'rxjs';
import { CollectionActions, AppContextActions } from '@app/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class CollectionsEffects {
  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.loadCollections),
      exhaustMap(() => {
        this.store.dispatch(AppContextActions.setLoading());
        return this.unsplash.listCollections().pipe(
          map(result => {
            const success = result.type === 'success';

            // toDo change to catch array of errors
            !success && this.store.dispatch(AppContextActions.setError({ error: result.errors[0], from: 'collections' }));

            return success
              ? CollectionActions.loadCollectionsSuccess({ collections: result.response.results })
              : CollectionActions.loadCollectionsFailure();
          }),
          finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
        );
      })
    )
  );

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
