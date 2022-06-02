import { TestBed } from '@angular/core/testing';

import { UnsplashService } from '../unsplash/unsplash.service';
import { firstValueFrom } from 'rxjs';

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to list collections', async () => {
    const result = await firstValueFrom(service.listCollections());
    expect(result.type).toBe('success');
    expect(result.response?.total).toBeGreaterThan(0);
  });

  it('should be able to list collection photos', async () => {
    const collections = await firstValueFrom(service.listCollections());
    expect(collections.type).toBe('success');
    expect(collections.response?.total).toBeGreaterThan(0);

    const collection = collections.response?.results[0];
    expect(collection).toBeTruthy();

    const photos = await firstValueFrom(service.listCollectionPhotos('' + collection?.id));
    expect(photos.type).toBe('success');
    expect(photos.response?.total).toBeGreaterThan(0);
  });
});
