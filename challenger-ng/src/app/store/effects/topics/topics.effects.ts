import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { exhaustMap, map } from 'rxjs';
import { TopicsActions } from '@app/store/actions';

@Injectable()
export class TopicsEffects {
  loadTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TopicsActions.loadTopics),
      exhaustMap(() =>
        this.unsplash
          .listTopics()
          .pipe(
            map(result =>
              result.type === 'success' ? TopicsActions.loadTopicsSuccess({ topics: result.response.results }) : TopicsActions.loadTopicsFailure()
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private unsplash: UnsplashService) {}
}
