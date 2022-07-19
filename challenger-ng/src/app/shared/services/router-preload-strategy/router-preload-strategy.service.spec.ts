import { TestBed } from '@angular/core/testing';

import { RouterPreloadStrategyService } from './router-preload-strategy.service';

describe('RouterPreloadStrategyService', () => {
  let service: RouterPreloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterPreloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
