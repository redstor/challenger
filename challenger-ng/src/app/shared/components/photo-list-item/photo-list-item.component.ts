import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.scss']
})
export class PhotoListItemComponent {
  @Input() title = '';
  @Input() photo_url = '';
  @Input() photo_description = '';
  
  @Output() photoClicked: EventEmitter<void> = new EventEmitter<void>();
}
