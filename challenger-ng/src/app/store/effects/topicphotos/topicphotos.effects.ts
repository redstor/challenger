import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of, withLatestFrom, finalize, delay } from 'rxjs';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { Store } from '@ngrx/store';
import { AppContextActions, TopicPhotosActions } from '@app/store/actions';
import { RouterSelectors } from '@app/store/selectors';

@Injectable()
export class TopicPhotosEffects {
  loadPhotos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TopicPhotosActions.loadTopicPhotos),
      withLatestFrom(this.store.select(RouterSelectors.selectRouteParam('topicId'))),
      exhaustMap(([_, topicId]) => {
        this.store.dispatch(AppContextActions.setLoading());
        this.store.dispatch(TopicPhotosActions.restoreTopicPhotos());
        return !topicId
          ? of(TopicPhotosActions.loadTopicPhotosFailure())
          : this.unsplash.listTopicPhotos(topicId).pipe(
              map(result => {
                const success = result.type === 'success';

                // toDo change to catch array of errors
                !success && this.store.dispatch(AppContextActions.setError({ error: result.errors[0], from: 'topicphotos' }));

                return success
                  ? TopicPhotosActions.loadTopicPhotosSuccess({
                      topicIdOrSlug: topicId,
                      topicPhotos: result.response.results, 
                    })
                  : TopicPhotosActions.loadTopicPhotosFailure();
              }),
              finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
            );
      })
    );
  });

  
  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
