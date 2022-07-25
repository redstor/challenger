import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideMockStore } from '@ngrx/store/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;
  let MockMatSnackBar = jasmine.createSpyObj('MatSnackBar', {
    open: () => true
  });

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideMockStore(), { provide: MatSnackBar, useValue: MockMatSnackBar }] });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
