import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { firstValueFrom, map, Observable } from 'rxjs';

import { selectRouteParam } from '../store/selectors/router.selectors';
import { Photo } from '@app/models/photo.model';
import { State } from '../store/reducers/photo.reducer';
import { loadPhoto } from '@app/store/actions/photo.actions';
import { selectPhoto } from '@app/store/selectors/photo.selectors';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent {
  photo$: Observable<Photo> = this.store.select(selectPhoto).pipe(map(x => x.photo));

  constructor(private store: Store<State>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadPhoto());
  }

  async handleGotoCollection() {
    const collectionId = await firstValueFrom(this.store.select(selectRouteParam('collectionId')));
    await this.router.navigate(['collection', collectionId]);
  }
}
