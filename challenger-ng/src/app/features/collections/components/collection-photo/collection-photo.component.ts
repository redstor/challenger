import { Component, OnInit } from '@angular/core';
import { Photo } from '@app/models';
import { PhotoActions } from '@app/store/actions';
import { PhotoSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { State } from '@app/store/reducers/photo/photo.reducer';

@Component({
  selector: 'app-collection-photo',
  templateUrl: './collection-photo.component.html'
})
export class CollectionPhotoComponent implements OnInit {
  photo$: Observable<Photo> = this.store.select(PhotoSelectors.selectPhoto).pipe(map(x => x.photo));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(PhotoActions.loadPhoto());
  }
}
