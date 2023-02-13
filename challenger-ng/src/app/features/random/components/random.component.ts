import { Component } from '@angular/core';
import { Photo } from '@app/models';
import { RandomActions } from '@app/store/actions';
import { State } from '@app/store/reducers';
import { RandomSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';
import { map, Observable} from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {
  photo$: Observable<Photo> = this.store.select(RandomSelectors.selectRandomPhoto).pipe(map(x => x.photo));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(RandomActions.loadRandomPhoto());
  }

  getNewRandomPhoto() {
    this.store.dispatch(RandomActions.loadRandomPhoto());
  }
  
}
