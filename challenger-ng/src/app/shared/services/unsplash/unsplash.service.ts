import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { from, Observable } from 'rxjs';
import { Photo, Collection } from '@app/models';
import { EnvironmentService } from '@app/shared/services';
import { Full } from 'unsplash-js/dist/methods/photos/types';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  api;

  constructor(environment: EnvironmentService) {
    this.api = createApi({
      accessKey: environment.unsplashAccessKey
    });
  }

  listCollections(): Observable<
    ApiResponse<{
      results: Collection[];
      total: number;
    }>
  > {
    return from(this.api.collections.list({}));
  }

  listCollectionPhotos(id: string): Observable<
    ApiResponse<{
      results: Photo[];
      total: number;
    }>
  > {
    return from(this.api.collections.getPhotos({ collectionId: id }));
  }

  getPhoto(id: string): Observable<
    ApiResponse<Full>
  > {
    return from(this.api.photos.get({ photoId: id }));
  }
}
