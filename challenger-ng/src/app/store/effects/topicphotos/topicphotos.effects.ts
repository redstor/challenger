import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of, withLatestFrom, finalize, delay, tap, catchError } from 'rxjs';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { Store } from '@ngrx/store';
import { AppContextActions, TopicPhotosActions } from '@app/store/actions';
import { RouterSelectors } from '@app/store/selectors';

@Injectable()
export class TopicPhotosEffects {
  loadPhotos$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TopicPhotosActions.loadTopicPhotos),
    withLatestFrom(this.store.select(RouterSelectors.selectRouteParam('topicId'))),
    exhaustMap(([_, topicId]) => {
      this.store.dispatch(AppContextActions.setLoading());
      return  this.unsplash.listTopicPhotos(topicId!).pipe(
        map((result) => TopicPhotosActions.loadTopicPhotosSuccess({ topicIdOrSlug: topicId!, topicPhotos: result.response!.results })),
        catchError((result) => of(TopicPhotosActions.loadTopicPhotosFailure({error: result}))),
        finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
      );
    })
  )
);



loadPhotoFailure$ = createEffect(() =>
this.actions$.pipe(
  ofType(TopicPhotosActions.loadTopicPhotosFailure),
  tap((result) => {
    this.store.dispatch(AppContextActions.setError({ error: result.error, from: 'topicphotos' }))
  })
),
{dispatch: false}
);
  
  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
