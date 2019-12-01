import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketSvgComponent } from './rocket-svg.component';

describe('RocketSvgComponent', () => {
  let component: RocketSvgComponent;
  let fixture: ComponentFixture<RocketSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
