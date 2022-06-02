import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhotoSearch } from '@app/models';
import { SearchActions } from '@app/store/actions';
import { SearchSelectors } from '@app/store/selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
    this.store.dispatch(SearchActions.newSearch({ searchKey: this.searchForm.value.search || ''}))
  }

}
