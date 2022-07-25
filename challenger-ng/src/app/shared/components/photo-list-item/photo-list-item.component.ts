import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html'
})
export class PhotoListItemComponent {
  // toDo add some example pictures in case its null/undefined
  @Input() photo_url = '';
  @Input() photo_description = '';
}
