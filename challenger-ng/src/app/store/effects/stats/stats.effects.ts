import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { map, finalize, exhaustMap } from 'rxjs';
import { StatsActions, AppContextActions } from '@app/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class StatsEffects {
  loadStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsActions.loadStats),
      exhaustMap(() => {
        this.store.dispatch(AppContextActions.setLoading());
        return this.unsplash.listStats().pipe(
          map(result => {
            console.log('results', result);
            const success = result.type === 'success';

            // toDo change to catch array of errors
            !success && this.store.dispatch(AppContextActions.setError({ error: result.errors[0], from: 'stats' }));

            return success ? StatsActions.loadStatsSuccess({ stats: result.response.results }) : StatsActions.loadStatsFailure();
          }),
          finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
        );
      })
    )
  );

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
