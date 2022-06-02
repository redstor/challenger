import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListItemComponent } from './photo-list-item/photo-list-item.component';
import { PhotoComponent } from './photo/photo.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PhotoListItemComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    FlexModule
  ],
  exports: [
    PhotoListItemComponent,
    PhotoComponent
  ]
})
export class ComponentsModule { }
