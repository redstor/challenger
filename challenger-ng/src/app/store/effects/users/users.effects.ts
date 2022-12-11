import { Injectable } from '@angular/core';
import { UnsplashService } from '@app/shared/services';
import { AppContextActions, UsersActions } from '@app/store/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, finalize } from 'rxjs';

@Injectable()
export class UsersEffects {
  newSearch$ = createEffect(() =>
    this.actions$.pipe(

      ofType(UsersActions.newSearch),
      exhaustMap(({ searchKey }) => {

        this.store.dispatch(AppContextActions.setLoading());

        return this.unsplash.searchUsers({ query: searchKey }).pipe(
          map(result =>

            result.type === 'success'
              ? UsersActions.usersSearchCompleted({
                results: result.response.results,
              })
              : UsersActions.loadUsersFailure()
          ),
          finalize(() => this.store.dispatch(AppContextActions.setLoaded()))
        );
      })
    )
  );

  constructor(private actions$: Actions, private unsplash: UnsplashService, private store: Store) { }
}
