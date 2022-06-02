import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html'
})
export class PhotoListItemComponent {
  @Input() title = '';
  @Input() photo_url = '';
  @Input() photo_description = '';
}
