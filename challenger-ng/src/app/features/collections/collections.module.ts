import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FlexModule } from '@angular/flex-layout';
import { CollectionPhotoComponent } from './components/collection-photo/collection-photo.component';
import { MatIconModule } from '@angular/material/icon';

const route: Routes = [
  {
    path: '',
    component: CollectionListComponent,
    data: {
      breadcrumb: 'collections'
    }
  },
  {
    path: 'collection/:collectionId',
    component: CollectionComponent,
    data: {
      breadcrumb: 'collection'
    }
  },
  {
    path: 'collection/:collectionId/photo/:photoId',
    component: CollectionPhotoComponent,
    data: {
      breadcrumb: 'photo'
    }
  }
];

@NgModule({
  declarations: [CollectionListComponent, CollectionComponent, CollectionPhotoComponent],
  imports: [CommonModule, RouterModule.forChild(route), ComponentsModule, MatIconModule, FlexModule]
})
export class CollectionsModule {}
