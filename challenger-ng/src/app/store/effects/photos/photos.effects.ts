import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { UnsplashService } from '@app/shared/services/unsplash/unsplash.service';
import { Store } from '@ngrx/store';
import { PhotosActions } from '@app/store/actions';
import { RouterSelectors } from '@app/store/selectors';

@Injectable()
export class PhotosEffects {
  loadPhotos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PhotosActions.loadPhotos),
      withLatestFrom(this.store.select(RouterSelectors.selectRouteParam('collectionId'))),
      exhaustMap(([_, id]) => {
        return !id
          ? of(PhotosActions.loadPhotosFailure())
          : this.unsplash.listCollectionPhotos(id).pipe(
              map(result => {
                return result.type === 'success'
                  ? PhotosActions.loadPhotosSuccess({
                      collectionId: id,
                      photos: result.response.results
                    })
                  : PhotosActions.loadPhotosFailure();
              })
            );
      })
    );
  });

  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
