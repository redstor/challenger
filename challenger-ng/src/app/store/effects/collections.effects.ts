import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCollections, loadCollectionsFailure, loadCollectionsSuccess } from '../actions/collections.actions';
import { UnsplashService } from '@app/services/unsplash.service';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class CollectionsEffects {
  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCollections),
      exhaustMap(() =>
        this.unsplash
          .listCollections()
          .pipe(
            map(result =>
              result.type === 'success' ? loadCollectionsSuccess({ collections: result.response.results }) : loadCollectionsFailure()
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private unsplash: UnsplashService) {}
}
