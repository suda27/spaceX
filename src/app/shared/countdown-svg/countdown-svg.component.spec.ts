import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownSvgComponent } from './countdown-svg.component';

describe('CountdownSvgComponent', () => {
  let component: CountdownSvgComponent;
  let fixture: ComponentFixture<CountdownSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
