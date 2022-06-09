import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Collection } from '@app/models';
import { CollectionSelectors } from '@app/store/selectors';
import { CollectionActions } from '@app/store/actions';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html'
})
export class CollectionListComponent implements OnInit {
  collections$: Observable<ReadonlyArray<Collection>> = this.store.pipe(select(CollectionSelectors.selectCollections));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CollectionActions.loadCollections());
  }
}
