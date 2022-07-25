import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// improves tree shaking
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();

  @Input() icon!: string;
  @Input() placeholder!: string;
  @Output() newSearch: EventEmitter<string> = new EventEmitter();

  searchForm = new FormGroup({
    search: new FormControl('', Validators.minLength(3))
  });

  ngOnInit(): void {
    this.subscriptions.add(
      this.searchForm.controls?.['search']?.valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe(value => this.newSearch.emit(value))
    );
  }

  handleEnter() {
    this.newSearch.emit(this.searchForm.controls?.['search']?.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
