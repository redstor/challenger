import { TopicsActions } from '@app/store/actions';
import { Component, OnInit } from '@angular/core';
import { Topic } from '@app/models';
import { TopicsSelectors } from '@app/store/selectors';
import { TopicOptions } from '@app/models/types/topics';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html'
})
export class TopicsComponent implements OnInit {
  results$: Observable<ReadonlyArray<Topic>> = this.store.pipe(select(TopicsSelectors.selectTopics));
  total$: Observable<number> = this.store.pipe(select(TopicsSelectors.selectTotal));
  pageSize: number = TopicOptions.perPage;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TopicsActions.loadTopics({}));
  }

  loadTopics({ pageIndex, pageSize }: PageEvent) {
    this.store.dispatch(TopicsActions.loadTopics({ page: pageIndex + 1, perPage: pageSize }));
  }
}
