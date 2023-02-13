import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '@app/models';
import { Store } from '@ngrx/store';
import { State } from '@app/store/reducers/photo/photo.reducer';
import { PhotoActions } from '@app/store/actions';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {
  @Input() photo!: Photo | null;

  
  constructor(private store: Store<State>) {}
}
