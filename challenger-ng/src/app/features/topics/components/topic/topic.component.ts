import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { TopicSelectors, PhotosSelectors } from '@app/store/selectors';
import { Photo } from '@app/models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TopicPhotosActions } from '@app/store/actions';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html'
})
export class TopicComponent implements OnInit {
  topicPhotos$: Observable<ReadonlyArray<Photo>> = this.store.select(TopicSelectors.selectTopicPhotos);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TopicPhotosActions.loadTopicPhotos());
  }

}
