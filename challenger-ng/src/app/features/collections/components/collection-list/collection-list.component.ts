import { CollectionOptions } from './../../../../models/interfaces/collection.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Collection } from '@app/models';
import { CollectionSelectors } from '@app/store/selectors';
import { CollectionActions } from '@app/store/actions';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html'
})
export class CollectionListComponent implements OnInit {
  collections$: Observable<ReadonlyArray<Collection>> = this.store.pipe(select(CollectionSelectors.selectCollections));
  total$: Observable<number> = this.store.pipe(select(CollectionSelectors.selectTotal));
  pageSize: number = CollectionOptions.perPage;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CollectionActions.loadCollections({}));
  }

  loadCollection({ pageIndex, pageSize }: PageEvent) {
    this.store.dispatch(CollectionActions.loadCollections({ page: pageIndex + 1, perPage: pageSize }));
  }
}
