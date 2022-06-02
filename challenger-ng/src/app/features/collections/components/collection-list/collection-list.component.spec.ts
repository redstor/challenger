import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionListComponent } from './collection-list.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('CollectionListComponent', () => {
  let component: CollectionListComponent;
  let fixture: ComponentFixture<CollectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [CollectionListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});