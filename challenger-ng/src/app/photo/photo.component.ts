import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../store/selectors/router.selectors';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  constructor(private store: Store, private router: Router) {}

  // ngOnInit(): void {
  //   this.store.select(loadPhoto());
  // }

  async handleGotoCollection() {
    const collectionId = await firstValueFrom(this.store.select(selectRouteParam('collectionId')));
    await this.router.navigate(['collection', collectionId]);
  }
}
