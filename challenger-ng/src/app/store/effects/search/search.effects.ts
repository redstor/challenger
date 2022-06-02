import { Injectable } from '@angular/core';
import { UnsplashService } from '@app/shared/services';
import { SearchActions } from '@app/store/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of } from 'rxjs';


@Injectable()
export class SearchEffects {
  newSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.newSearch),
      exhaustMap(({ searchKey }) =>
        this.unsplash
          .searchPhotos({ query: searchKey })
          .pipe(
            map(result =>
              result.type === 'success' ?
                SearchActions.photoSearchCompleted({ total: result.response.total, photosResult: result.response.results })
                : SearchActions.loadPhotosFailure()
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private unsplash: UnsplashService) { }

}
