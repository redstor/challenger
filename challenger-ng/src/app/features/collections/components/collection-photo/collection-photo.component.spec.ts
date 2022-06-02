import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPhotoComponent } from './collection-photo.component';

describe('CollectionPhotoComponent', () => {
  let component: CollectionPhotoComponent;
  let fixture: ComponentFixture<CollectionPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
