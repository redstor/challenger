import { State } from '@app/store/reducers/app-context/app-context.reducer';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppContextSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly options: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'end',
    verticalPosition: 'top'
  };

  // toDo improve this service using a multi toast, this allows just 1 message each
  constructor(private snackBar: MatSnackBar, private store: Store) {}

  initService() {
    this.store
      .select(AppContextSelectors.selectErrors)
      .pipe(filter(error => !!error))
      .subscribe(this.processError.bind(this));
  }

  private processError(error: { message: string; from: string } | null) {
    error?.message && this.showError(error?.message);
  }

  showSuccess(message: string, title?: string) {
    this.snackBar.open(message, title || 'x', { ...this.options, panelClass: 'toast__success' });
  }

  showError(message: string, title?: string) {
    this.snackBar.open(message, title || 'x', { ...this.options, panelClass: 'toast__error' });
  }
}
