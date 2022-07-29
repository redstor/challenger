import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { map, finalize, exhaustMap } from 'rxjs';
import { TopicsActions, AppContextActions } from '@app/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class TopicsEffects {
  loadTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TopicsActions.loadTopics),
      exhaustMap(({ page, perPage, orderBy }) => {
        this.store.dispatch(AppContextActions.setLoading());
        return this.unsplash.listTopics(page, perPage, orderBy).pipe(
          map(result => {
            const success = result.type === 'success';

            // toDo change to catch array of errors
            !success && this.store.dispatch(AppContextActions.setError({ error: result.errors[0], from: 'topics' }));

            return success
              ? TopicsActions.loadTopicsSuccess({ topics: result.response.results, total: result.response.total })
              : TopicsActions.loadTopicsFailure();
          }),
          finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
        );
      })
    )
  );

  constructor(private store: Store, private actions$: Actions, private unsplash: UnsplashService) {}
}
