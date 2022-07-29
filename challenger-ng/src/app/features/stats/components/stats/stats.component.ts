import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';

import { StatsActions } from '@app/store/actions';
import { Stats } from '@app/models';
import { StatsSelectors } from '@app/store/selectors';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  results$: Observable<{ title: string; number: number }[]> = this.store.pipe(
    select(StatsSelectors.selectStats),
    map((values: Stats) =>
      Object.entries(values).map(([key, value]) => ({
        title: key?.replace(new RegExp('_', 'g'), ' '),
        number: value
      }))
    )
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(StatsActions.loadStats());
  }
}
