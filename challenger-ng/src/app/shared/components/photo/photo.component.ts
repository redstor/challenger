import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Photo } from '@app/models';
import { State } from '../../../store/reducers/photo/photo.reducer';
import { PhotoActions } from '@app/store/actions';
import { PhotoSelectors, RouterSelectors } from '@app/store/selectors';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent implements OnInit {
  photo$: Observable<Photo> = this.store.select(PhotoSelectors.selectPhoto).pipe(map(x => x.photo));

  constructor(private store: Store<State>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(PhotoActions.loadPhoto());
  }

  async handleGotoCollection() {
    const collectionId = await firstValueFrom(this.store.select(RouterSelectors.selectRouteParam('collectionId')));
    await this.router.navigate(['collection', collectionId]);
  }
}
