import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PhotosSelectors } from '@app/store/selectors';
import { Photo } from '@app/models';
import { PhotosActions } from '@app/store/actions';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
})
export class CollectionComponent implements OnInit {
  photos$: Observable<ReadonlyArray<Photo>> = this.store.select(PhotosSelectors.selectPhotos);

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(PhotosActions.loadPhotos());
  }

  async handleGotoPhoto(photo: Photo) {
    const collectionId = await firstValueFrom(this.store.select(PhotosSelectors.selectCollectionId));
    await this.router.navigate(['collections/collection', collectionId, 'photo', photo.id]);
  }
}
