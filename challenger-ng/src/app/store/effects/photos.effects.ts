import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPhotos, loadPhotosFailure, loadPhotosSuccess } from '../actions/photos.actions';
import { exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { UnsplashService } from '@app/services/unsplash.service';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../selectors/router.selectors';

@Injectable()
export class PhotosEffects {
  loadPhotos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPhotos),
      withLatestFrom(this.store.select(selectRouteParam('collectionId'))),
      exhaustMap(([_, id]) => {
        return !id
          ? of(loadPhotosFailure())
          : this.unsplash.listCollectionPhotos(id).pipe(
              map(result => {
                return result.type === 'success'
                  ? loadPhotosSuccess({
                      collectionId: id,
                      photos: result.response.results,
                    })
                  : loadPhotosFailure();
              })
            );
      })
    );
  });

  constructor(private actions$: Actions, private store: Store, private unsplash: UnsplashService) {}
}
