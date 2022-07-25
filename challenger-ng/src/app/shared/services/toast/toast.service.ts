import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppContextSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';

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
    this.store.select(AppContextSelectors.selectErrors).subscribe(this.processError.bind(this));
  }

  private processError({ message }: any) {
    this.showError(message);
  }

  showSuccess(message: string, title?: string) {
    this.snackBar.open(message, title || 'x', { ...this.options, panelClass: 'toast__success' });
  }

  showError(message: string, title?: string) {
    this.snackBar.open(message, title || 'x', { ...this.options, panelClass: 'toast__error' });
  }
}
