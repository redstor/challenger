import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Photo, Collection, CollectionOptions, Topic, TopicOptions, TopicOrderByEnum, Stats } from '@app/models';
import { EnvironmentService } from '@app/shared/services';
import { Full } from 'unsplash-js/dist/methods/photos/types';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import { PaginationParams } from 'unsplash-js/dist/types/request';
// improved tree shaking
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { RequestService } from './../request/request.service';
import { map } from 'rxjs/internal/operators/map';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  api;

  constructor(environment: EnvironmentService, private requestService: RequestService) {
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

  listTopics(
    page: number = 1,
    perPage: number = TopicOptions.perPage,
    orderBy: TopicOrderByEnum = TopicOptions.orderBy
  ): Observable<
    ApiResponse<{
      results: Topic[];
      total: number;
    }>
  > {
    return from(this.api.topics.list({ page, perPage, orderBy }));
  }

  listStats(): Observable<
    ApiResponse<{
      results: Stats;
    }>
  > {
    return this.requestService.get(environment.unsplash.url + '/stats/total').pipe(
      map(
        res =>
          ({ type: 'success', status: 200, originalResponse: res, response: { results: res } } as ApiResponse<{
            results: Stats;
          }>)
      )
    );
  }
}
