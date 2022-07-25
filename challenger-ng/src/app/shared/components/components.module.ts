import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListItemComponent } from './photo-list-item/photo-list-item.component';
import { PhotoComponent } from './photo/photo.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { SearchInputComponent } from './search-input/search-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PhotoListItemComponent, PhotoComponent, SearchInputComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [PhotoListItemComponent, PhotoComponent, SearchInputComponent]
})
export class ComponentsModule {}
