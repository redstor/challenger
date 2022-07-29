import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatViewComponent } from './stat-view.component';

describe('StatViewComponent', () => {
  let component: StatViewComponent;
  let fixture: ComponentFixture<StatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
