/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsComponent } from './topics.component';
import storeMock from '@app/store/mock/store.mock';
import { Store } from '@ngrx/store';
import { TopicsActions } from '@app/store/actions';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Store, useValue: storeMock }],
      declarations: [TopicsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // toDo include component templates snapshots
  // it('should match snapshot', () => {
  //   expect(fixture).toMatchSnapshot();
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('store dispatch is triggered in on init', () => {
    component.ngOnInit();
    expect(storeMock.dispatch).toHaveBeenCalledWith(TopicsActions.loadTopics({}));
  });
});
