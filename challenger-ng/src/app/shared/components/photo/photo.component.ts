import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '@app/models';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {
  @Input() photo!: Photo | null;
}
