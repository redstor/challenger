import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { timer } from 'rxjs/internal/observable/timer';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class RouterPreloadStrategyService implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const { preload, delay }: any = route?.data;
    const loadRoute = (delay: number) => (delay ? timer(delay).pipe(mergeMap(_ => load())) : load());
    return preload ? loadRoute(delay) : of(null);
  }
}
