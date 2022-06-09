import { Component, Input } from '@angular/core';
import { Photo } from '@app/models';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent {
  @Input() photo!: Photo | null;
}
