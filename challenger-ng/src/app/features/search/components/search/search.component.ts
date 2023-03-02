import { Component, OnInit } from '@angular/core';
import { PhotoSearch } from '@app/models';
import { HeaderService } from '@app/shared/services/header/header.service';
import { SearchActions } from '@app/store/actions';
import { SearchSelectors } from '@app/store/selectors';
import { select, Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  results$: Observable<ReadonlyArray<PhotoSearch>> = this.store.pipe(select(SearchSelectors.selectSearchResult));

  constructor(private store: Store, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.subscribeHeaderListener();
  }

  handleSearch(value: string) {
    this.store.dispatch(SearchActions.newSearch({ searchKey: value }));
  }

  //Receives search value emitted from header
  subscribeHeaderListener() {
    this.headerService.searchChanged.subscribe((value: string) => {
      this.handleSearch(value);
    });
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
