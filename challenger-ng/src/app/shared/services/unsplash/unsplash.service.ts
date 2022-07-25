import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { from, Observable } from 'rxjs';
import { Photo, Collection, CollectionOptions } from '@app/models';
import { EnvironmentService } from '@app/shared/services';
import { Full } from 'unsplash-js/dist/methods/photos/types';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import { PaginationParams } from 'unsplash-js/dist/types/request';

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

  listCollections(
    page: number = 1,
    perPage: number = CollectionOptions.perPage
  ): Observable<
    ApiResponse<{
      results: Collection[];
      total: number;
    }>
  > {
    return from(this.api.collections.list({ page, perPage }));
  }

  listCollectionPhotos(id: string): Observable<
    ApiResponse<{
      results: Photo[];
      total: number;
    }>
  > {
    return from(this.api.collections.getPhotos({ collectionId: id }));
  }

  getPhoto(id: string): Observable<ApiResponse<Full>> {
    return from(this.api.photos.get({ photoId: id }));
  }

  searchPhotos(query: { query: string } & Pick<PaginationParams, 'page' | 'perPage'>): Observable<ApiResponse<Photos>> {
    return from(this.api.search.getPhotos(query));
  }
}
