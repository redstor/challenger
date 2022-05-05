import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadCollections } from '../store/actions/collections.actions';
import { Observable } from 'rxjs';
import { Collection } from '../models/collection.model';
import { selectCollections } from '../store/selectors/collections.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collections$: Observable<ReadonlyArray<Collection>> = this.store.pipe(select(selectCollections));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCollections());
  }
}
