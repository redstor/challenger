import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexModule } from '@angular/flex-layout';
import { CollectionPhotoComponent } from './components/collection-photo/collection-photo.component';
import { MatIconModule } from '@angular/material/icon';

const route: Routes = [
  { path: '', component: CollectionListComponent },
  { path: 'collection/:collectionId', component: CollectionComponent },
  { path: 'collection/:collectionId/photo/:photoId', component: CollectionPhotoComponent }
];

@NgModule({
  declarations: [
    CollectionListComponent,
    CollectionComponent,
    CollectionPhotoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ComponentsModule,
    MatProgressBarModule,
    MatIconModule,
    FlexModule
  ]
})
export class CollectionsModule { }
