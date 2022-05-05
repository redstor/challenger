import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Collection } from '../models/collection.model';
import { from, Observable } from 'rxjs';
import { Photo } from '../models/photo.model';
import { EnvironmentService } from '@app/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  api;

  constructor(environment: EnvironmentService) {
    this.api = createApi({
      accessKey: environment.unsplashAccessKey,
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
}
