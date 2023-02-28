import { TopicsActions } from '@app/store/actions';
import { Component, OnInit } from '@angular/core';
import { Topic } from '@app/models';
import { TopicsSelectors } from '@app/store/selectors';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { TopicOrderByEnum } from '@app/models';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html'
})
export class TopicsComponent implements OnInit {
  results$: Observable<ReadonlyArray<Topic>> = this.store.pipe(select(TopicsSelectors.selectTopics));

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(TopicsActions.loadTopics({}));
  }
}
