import { Component } from '@angular/core';
import { PhotoSearch } from '@app/models';
import { SearchActions } from '@app/store/actions';
import { SearchSelectors } from '@app/store/selectors';
import { select, Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  results$: Observable<ReadonlyArray<PhotoSearch>> = this.store.pipe(select(SearchSelectors.selectSearchResult));

  constructor(private store: Store) {}

  handleSearch(value: string) {
    this.store.dispatch(SearchActions.newSearch({ searchKey: value }));
  }

  onScrollDown(): void {
    this.results$
      .pipe(
        take(1),
        filter(arr => !!arr?.length)
      )
      .subscribe(() => this.store.dispatch(SearchActions.loadMoreSearchItems()));
  }
}
