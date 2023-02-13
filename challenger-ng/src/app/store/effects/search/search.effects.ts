import { Injectable } from '@angular/core';
import { UnsplashService } from '@app/shared/services';
import { AppContextActions, SearchActions } from '@app/store/actions';
import { AppContextSelectors, SearchSelectors } from '@app/store/selectors';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, exhaustMap, map, mergeMap, of, withLatestFrom, finalize, filter, tap, catchError } from 'rxjs';

@Injectable()
export class SearchEffects {

  newSearch$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SearchActions.newSearch),
    exhaustMap(({ searchKey }) => {
      this.store.dispatch(AppContextActions.setLoading());
      return this.unsplash.searchPhotos({ query: searchKey }).pipe(
        map((result) => SearchActions.photoSearchCompleted({
          photosResult: result.response!.results,
          totalPages: result.response!.total_pages
        })),
        catchError((result) => of(SearchActions.loadPhotosFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);

  loadMoreSearchItems$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SearchActions.loadMoreSearchItems),
    withLatestFrom(this.store.select(AppContextSelectors.isLoading)),
    filter(([_, isLoading]) => !isLoading),
    withLatestFrom(this.store.select(SearchSelectors.selectSearchState)),
    exhaustMap(([_, state]) => {
      this.store.dispatch(AppContextActions.setLoading());
      return state.currentPage < state.totalPages 
      ? this.unsplash.searchPhotos({ query: state.lastSearch, page: state.currentPage + 1 }).pipe(
        mergeMap((result) => of(SearchActions.addPhotos({photosResult: result.response!.results}))),
        catchError((result) => of(SearchActions.loadPhotosFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))

      ) : EMPTY;
    })
  )
);

loadPhotoFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(SearchActions.loadPhotosFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'search' }))
  })
),
{dispatch: false}
);


  constructor(private actions$: Actions, private unsplash: UnsplashService, private store: Store) {}
}
