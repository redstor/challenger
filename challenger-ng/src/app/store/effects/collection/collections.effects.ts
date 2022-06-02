import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { exhaustMap, map } from 'rxjs';
import { CollectionActions } from '@app/store/actions';

@Injectable()
export class CollectionsEffects {
  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.loadCollections),
      exhaustMap(() =>
        this.unsplash
          .listCollections()
          .pipe(
            map(result =>
              result.type === 'success' ? CollectionActions.loadCollectionsSuccess({ collections: result.response.results }) : CollectionActions.loadCollectionsFailure()
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private unsplash: UnsplashService) {}
}
