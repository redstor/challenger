import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { StatsEffects } from './stats.effects';

describe('StatsEffects', () => {
  let actions$: Observable<any>;
  let effects: StatsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.inject(StatsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
