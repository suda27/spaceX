import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesViewComponent } from './launches-view.component';

describe('LaunchesViewComponent', () => {
  let component: LaunchesViewComponent;
  let fixture: ComponentFixture<LaunchesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
