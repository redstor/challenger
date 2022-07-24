import { Component, OnInit } from '@angular/core';
import { Topics } from '@app/models';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TopicsSelectors } from '@app/store/selectors';
import { TopicsActions } from '@app/store/actions';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html'
})
export class TopicsComponent implements OnInit {
  topics$: Observable<Topics> = this.store.pipe(select(TopicsSelectors.selectTopics));
  
  constructor(private store: Store) {
    console.log('meh', this.topics$);
    
   }

  ngOnInit(): void {
    this.store.dispatch(TopicsActions.loadTopics());
  }

}
