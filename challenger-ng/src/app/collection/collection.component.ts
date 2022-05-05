import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { Photo } from '../models/photo.model';
import { selectCollectionId, selectPhotos } from '../store/selectors/photos.selectors';
import { loadPhotos } from '../store/actions/photos.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  photos$: Observable<ReadonlyArray<Photo>> = this.store.select(selectPhotos);

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadPhotos());
  }

  async handleGotoPhoto(photo: Photo) {
    const collectionId = await firstValueFrom(this.store.select(selectCollectionId));
    await this.router.navigate(['collection', collectionId, 'photo', photo.id]);
  }
}
