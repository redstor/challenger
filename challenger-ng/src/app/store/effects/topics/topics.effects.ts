import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { map, finalize, exhaustMap, catchError, of, tap } from 'rxjs';
import { TopicsActions, AppContextActions } from '@app/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class TopicsEffects {
  loadTopics$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TopicsActions.loadTopics),
    exhaustMap(({ page, perPage, orderBy }) => {
      this.store.dispatch(AppContextActions.setLoading());
      return  this.unsplash.listTopics(page, perPage, orderBy).pipe(
        map((result) => TopicsActions.loadTopicsSuccess({ topics: result.response!.results, total: result.response!.total })),
        catchError((result) => of(TopicsActions.loadTopicsFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);

loadTopicsFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(TopicsActions.loadTopicsFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'topics' }))
  })
),
{dispatch: false}
);

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
