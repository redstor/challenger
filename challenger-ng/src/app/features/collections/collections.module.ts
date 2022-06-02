import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PhotoComponent } from '@app/shared/components/photo/photo.component';
import { FlexModule } from '@angular/flex-layout';

const route: Routes = [
  {
    path: '',
    component: CollectionListComponent
  },
  { path: 'collection/:collectionId', component: CollectionComponent },
  { path: 'collection/:collectionId/photo/:photoId', component: PhotoComponent }
];

@NgModule({
  declarations: [
    CollectionListComponent,
    CollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ComponentsModule,
    MatProgressBarModule,
    FlexModule
  ]
})
export class CollectionsModule { }
