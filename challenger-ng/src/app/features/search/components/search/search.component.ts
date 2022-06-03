import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  searchForm = new FormGroup({
    search: new FormControl('')
  });
  results$: Observable<ReadonlyArray<PhotoSearch>> = this.store.pipe(select(SearchSelectors.selectSearchResult));

  constructor(private store: Store) { }

  newSearch() {
    this.store.dispatch(SearchActions.newSearch({ searchKey: this.searchForm.value.search }));
  }

  onScrollDown(): void {
    this.results$.pipe(
      take(1),
      filter(arr => arr && arr.length > 0)
    ).subscribe(() => this.store.dispatch(SearchActions.loadMoreSearchItems()));
  }
}
