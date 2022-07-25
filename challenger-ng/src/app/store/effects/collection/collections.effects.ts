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
      exhaustMap(() => {
        this.store.dispatch(AppContextActions.setLoading());
        return this.unsplash.listCollections().pipe(
          map(result =>
            result.type === 'success'
              ? CollectionActions.loadCollectionsSuccess({ collections: result.response.results })
              : CollectionActions.loadCollectionsFailure()
          ),
          finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
        );
      })
    )
  );

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
