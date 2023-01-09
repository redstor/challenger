import { Component, OnInit } from '@angular/core';
import { UsersSearch } from '@app/models/types/user-search';
import { UsersActions } from '@app/store/actions';
import { UsersSelectors } from '@app/store/selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {


  results$: Observable<ReadonlyArray<UsersSearch>> = this.store.pipe(select(UsersSelectors.selectUsersResult));

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  handleSearch(value: string) {
    this.store.dispatch(UsersActions.newSearch({ searchKey: value }));
  }

}
