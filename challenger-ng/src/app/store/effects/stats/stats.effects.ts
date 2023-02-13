import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { map, finalize, exhaustMap, catchError, of, tap } from 'rxjs';
import { StatsActions, AppContextActions } from '@app/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class StatsEffects {

  loadStats$ = createEffect(() =>
  this.actions$.pipe(
    ofType(StatsActions.loadStats),
    exhaustMap(() => {
      this.store.dispatch(AppContextActions.setLoading());
      return  this.unsplash.listStats().pipe(
        map((result) => StatsActions.loadStatsSuccess({ stats: result.response!.results })),
        catchError((result) => of(StatsActions.loadStatsFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);

loadStatsFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(StatsActions.loadStatsFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'stats' }))
  })
),
{dispatch: false}
);

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
